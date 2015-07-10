// app/routes.js


var express = require('express');
var router = express.Router();       // get an instance of the express Router


module.exports = function(app) {

    // ROUTES FOR OUR API
    // =============================================================================       
    var Post = require('../models/post');

    // all of our routes prefixed with /api
    app.use('/api', router);

    // middleware to use for all requests
    router.use(function(request, response, next) {
        next(); 
    });


    // TEST API ENDPOINT
    router.get('/', function(request, response) {
        response.json({ 
            message: 'hooray! welcome to our api!' 
        });   
    });

    // on routes that end in /posts
    router.route('/posts')

        // create a post 
        .post(function(request, response) {
            
            var post = new Post();              // create a new instance of the Post model
            post.title = request.body.title;    // set the posts title (comes from the request)
            post.body  = request.body.body;

            // save the post and check for errors
            post.save(function(err) {
                if (err) response.send(err);
                response.json(post);
            });
        })

        // get all the posts
        .get(function(req, response) {
            Post.find(function(err, posts) {
                if (err) response.send(err);
                response.json(posts);
            });
        });



    // on routes that end /posts/:post_id
    router.route('/posts/:post_id')

        // get the post with that id 
        .get(function(request, response) {
            Post.findById(request.params.post_id, function(err, post) {
                if (err) response.send(err);
                response.json(post);
            });
        })

        // update the post with that id 
        .put(function(request, response) {

            // find the post
            Post.findById(request.params.post_id, function(err, post) {
                if (err) response.send(err);

                // update post info
                post.title = request.body.title;
                post.body = request.body.body;

                // save the post
                post.save(function(err) {
                    if (err) response.send(err);
                    response.json({ message: "Post has been updated!" });
                });
            });
        })
            
        // delete the post with this id (accessed at DELETE http://localhost:8080/api/posts/:post_id)
        .delete(function(req, res) {
            Post.remove({
                _id: req.params.post_id
            }, function(err, post) {
                if (err) res.send(err);
                res.json({ message: 'Successfully deleted' });
            });
        });  
};



