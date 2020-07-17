if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

const mongoose = require('mongoose');
const express = require('express')
const bodyParser = require("body-parser");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const initializePassport = require('./passportConfig');
const config = require('./auth');

// Application keys
const mongoURI = process.env.MONGO_URI;
// MongoDB stuff
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function() {
  console.log("Mongoose server connected successfully!");
});

mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology:true});

// Passport stuff
initializePassport(passport);

// Express stuff 
const app = express();
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', [process.env.CLIENT_IP]);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    res.append('Access-Control-Allow-Credentials', true);
    next();
});

app.use(cookieParser(config.jwt.secret))
app.use(bodyParser.json());
app.use(passport.initialize());

app.listen(port, () => console.log(`Web app backend listening at http://localhost:${port}`))

require('./routes')(app);
require('./routes/userRoutes')(app);