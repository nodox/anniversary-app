// server.js


// BASE CONFIGURATION
// =============================================================================


// modules =====================================
var express 	   = require('express');
var app			   = express();
var bodyParser	   = require('body-parser');
var methodOverride = require('method-override');
var mongoose       = require('mongoose');



// MAILER =====================================
var nodemailer     = require('nodemailer');
//**** Turn off security (below) or use OAUTH2 
// https://www.google.com/settings/security/lesssecureapps ****//


// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'stevennatera15@gmail.com',
        pass: "PASSWORD_HERE"
    }
});

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'stevennatera15@gmail.com', // sender address
    to: 'snatera09@gmail.com', // list of receivers
    subject: 'Hello World!!', // Subject line
    text: 'This is a success Test', // plaintext body
    html: '<b>It works!!!</b>' // html body
};


// send mail with defined transport object
/*transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    } else {
        console.log('Message sent: ' + info.response);
    }
});*/


// =====================================

/*
    Database
    - Connect locally or with deployment database
    ---- local: run `mongod` then 'mongo' in separate terminal windows 
    ---- optional: control with Mongo Management Studio application
    - mongoose.disconnect() to close connection
    - mongoose updates to the database using save, delete, ...etc commands
*/
//mongoose.connect('mongodb://localhost/DATABASE_NAME'); 
mongoose.connect('mongodb://sn:lp@novus.modulusmongo.net:27017/gyQ4unot'); 
var Post = require('./app/models/post');



// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// set our port
var port = process.env.PORT || 8080; 



// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();          // get an instance of the express Router


// all of our routes will be prefixed with /api
app.use('/api', router);



// middleware to use for all requests
router.use(function(request, response, next) {
    // do logging
    
    //console.log('Something is happening in server.js');
    next(); // make sure we go to the next routes and don't stop here
});


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(request, response) {
    response.json({ 
        message: 'hooray! welcome to our api!' 
    });   
});

// more routes for our API will happen here


// on routes that end in /posts
// ----------------------------------------------------
router.route('/posts')

    // create a post (accessed at POST http://localhost:8080/api/posts)
    .post(function(request, response) {
        
        var post = new Post();      				// create a new instance of the Post model
        post.title = request.body.title;  	// set the posts title (comes from the request)
        post.body  = request.body.body;

        // save the post and check for errors
        post.save(function(err) {
            if (err)
                response.send(err);

            response.json({ message: 'Post created!' });
        });
        
    })

    // get all the posts (accessed at GET http://localhost:8080/api/posts)
    .get(function(req, response) {

        Post.find(function(err, posts) {
            if (err)
                response.send(err);

            response.json(posts);
        });
    });



// on routes that end in /posts/:post_id
// ----------------------------------------------------

router.route('/posts/:post_id')

	// get the post with that id (accessed at GET http://localhost:8080/api/posts/:post_id)
	.get(function(request, response) {
			Post.findById(request.params.post_id, function(err, post) {
				if (err) response.send(err);
				response.json(post);
			});
	})

		// update the post with that id (accessed at PUT http://localhost:8080/api/posts/:post_id)
    .put(function(request, response) {

    		// find the post we want
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




// START THE SERVER
// =============================================================================

app.use(express.static(__dirname + '/public'));   // set the static files location /public

app.listen(port);      														// startup our app at http://localhost:8080         

// shoutout to the user                     
console.log('Magic happens on port ' + port);




// expose app           
exports = module.exports = app;   




