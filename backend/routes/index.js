module.exports = function(app){
    /**
     * Test route.
     */
    app.get('/', function(req, res){
        res.send("Test OK!");
    });
}