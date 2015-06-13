Backend = server.js, app/ , config/ { MongoDB, ExpressJS, NodeJS}
Frontend = public { AngularJS }

    - app
        ----- models/
        ---------- nerd.js <!-- the nerd model to handle CRUD -->
    ----- routes.js
    - config
        ----- db.js 
    - node_modules <!-- created by npm install -->
    - public <!-- all frontend and angular stuff -->
    ----- css
    ----- js
    ---------- controllers <!-- angular controllers -->
    ---------- services <!-- angular services -->
    ---------- app.js <!-- angular application -->
    ---------- appRoutes.js <!-- angular routes -->
    ----- img
    ----- libs <!-- created by bower install -->
    ----- views 
    ---------- home.html
    ---------- nerd.html
    ---------- geek.html
    ----- index.html
    - .bowerrc <!-- tells bower where to put files (public/libs) -->
    - bower.json <!-- tells bower which files we need -->
    - package.json <!-- tells npm which packages we need -->
    - server.js <!-- set up our node application -->


# Notes

Project Setup
https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application
http://meanjs.org/docs.html#folder-structure
https://scotch.io/tutorials/using-gruntjs-in-a-mean-stack-application
https://scotch.io/tutorials/angularjs-best-practices-directory-structure

RESTful API for Journal entries + User Authentication
https://thinkster.io/mean-stack-tutorial/

RESTful API for Journal entries
https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
http://adrianmejia.com/blog/2014/10/01/creating-a-restful-api-tutorial-with-nodejs-and-mongodb/


Connecting to Database
http://michelebusta.com/the-little-things-5-initialize-a-local-mongo-db/

Database
modulus.io --> mongoDB cloud database

Getting Database data to Client Side
create RESTFUL API and use Angular $http to get data from API urls (as done in this app)
use angoose --> https://github.com/tjworks/angoose-demo


Scrolling effects I'm searching for:
http://projects.lukehaas.me/scrollify/#home
http://www.pushhere.com
fullpage.js
http://ninodezign.com/30-jquery-plugins-for-scrolling-effects-with-css-animation/

Off Screen Navigation
http://www.sitepoint.com/pure-css-off-screen-navigation-menu/