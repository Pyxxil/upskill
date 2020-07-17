const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = mongoose.model("users");
const config = require("../auth");

module.exports = function (app) {
    app.post('/user/register', async (req, res) => {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password, because storing hashed passwords is infinitely more secure.

        var user = new User();

        user.name = name;
        user.email = email.toLowerCase();
        user.password = hashedPassword;

        await user.save((err) => {
            // Error handling for saving user object
            if (err && err.code != 11000) {
                console.log("Something went horribly wrong in /testRegister.");
                res.status(500).send("Something went horribly wrong.");
            } else if (err && err.code == 11000) {
                console.log("User already exists in /testRegister.");
                res.status(400).send("User already exists with this email.");
            } else {
                console.log("Creating user...")
                res.status(201).send({user: user});
            }
        });
    });

    app.post('/user/login', async function (req, res, next) {
        passport.authenticate('local', function (err, user, info) {
            if (err) {    // Internal server error
                res.status(500).send(err);
            }
            if (!user) {  // User not found or wrong password
                res.status(401).send(info.message);
            } else { // User found!
                // Sign and send a JWT token as a cookie
                var token = jwt.sign({
                    user: {
                        name: user.name,
                        email: user.email
                    }
                }, config.jwt.secret, config.jwt.options);

                res.cookie('authtoken', token, config.jwt.cookie);
                res.send({
                    user: {
                        email: user.email,
                        name: user.name,
                    }
                });
            }
        })(req, res, next)
    });

    app.post("/user/logout", (req, res, next) => {
        passport.authenticate('jwt', (err, user, info) => {
            if (err) {
                res.status(500).send(err);
            }
            if (info) {
                res.status(401).send(info);
            }
            if (user) {
                res.cookie('authtoken', '', config.jwt.cookie);
                res.send("Successfully logged out.");
            }
        })(req, res, next);
    });

    app.get("/user/current-user", (req, res, next) => {
        passport.authenticate('jwt', async (err, tokenContent, info) => {
            if (err) {
                res.status(500).send(err);
            } else if (info) {
                res.status(401).send(info);
            } else if (tokenContent) {
                await User.findOne({ email: tokenContent.user.email }).then((user) => {
                    res.send({
                        user: {
                            email: user.email,
                            name: user.name,
                        }
                    });
                }).catch((err) => {
                    res.status(500).send(err);
                });
            }
        })(req, res, next);
    });

    app.post("/user/current-user", (req, res, next) => {
        passport.authenticate('jwt', async (err, tokenContent, info) => {
            if (err) {
                res.status(500).send(err);
            }
            if (info) {
                res.status(401).send(info);
            }
            if (tokenContent) {
                await User.findOneAndUpdate({email: tokenContent.user.email}, req.body, {new: true}).then((user)=>{
                    res.send({
                        user: {
                            email: user.email,
                            name: user.name,
                        }
                    });
                }).catch((err)=>{
                    res.status(500).send(err);
                })
            }
        })(req, res, next);
    });
}