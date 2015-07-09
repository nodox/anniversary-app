// server.js


// BASE CONFIGURATION
// =============================================================================


// modules =====================================
var express 	   = require('express');
var app			   = express();
var bodyParser	   = require('body-parser');
var methodOverride = require('method-override');
var mongoose       = require('mongoose');
var apiEndpoints     = require('./app/routes/routes')(app);



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








// START THE SERVER
// =============================================================================

app.use(express.static(__dirname + '/public'));   // set the static files location /public

app.listen(port);      														// startup our app at http://localhost:8080         

// shoutout to the user                     
console.log('Magic happens on port ' + port);




// expose app           
exports = module.exports = app;   




