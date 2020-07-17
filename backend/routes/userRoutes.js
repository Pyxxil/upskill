module.exports = function(app){
    /**
     * Test route.
     */
    app.get('/user/', function(req, res){
        res.send("User OK!");
    });
}