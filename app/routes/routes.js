/*// app/routes.js

// grab the Data model we just created
var Data = require('./models/data');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/data', function(req, res) {
            // use mongoose to get all data in the database
            Data.find(function(err, data) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(data); // return all data in JSON format
            });
        });

        // route to handle creating goes here (app.post)


        // route to handle delete goes here (app.delete)


        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/index.html'); // load our public/index.html file
        });

    };*/