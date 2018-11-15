var express = require('express');
var mongoose = require('mongoose');
var app = express();
var router = express.Router();

// Schemas for post api call
var postSchema = mongoose.Schema({}, { collection: 'post'});
var Post = mongoose.model('post', postSchema);
// Schemas for about api call
var aboutSchema = mongoose.Schema({}, { collection: 'about'});
var About = mongoose.model('about', aboutSchema);
// Scemas for appreciation api call
var appreciationSchema = mongoose.Schema({}, { collection: 'appreciation'});
var Appreciation = mongoose.model('appreciation', appreciationSchema);
// Schemas for videos api call
var videosSchema = mongoose.Schema({}, { collection: 'videos'});
var Videos = mongoose.model('videos', videosSchema);



// Connection to the database
mongoose.connect('mongodb://127.0.0.1:27017/baap-strapi').then(() => {
    console.log('connected to database');
}, (err) => {
    console.error(err);
});


// Middleware to get past CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Api call to get all blog posts
router.get('/post', (req, res) => {
   Post.find({}).exec().then((posts) => {
       res.send(posts);
   }); 
});

router.get('/postrecent', (req, res) => {
    Post.find({}).sort({ created: 'desc' }).limit(3).exec().then((posts) => {
        res.send(posts);
    }); 
 });

// Api call to get all about information
router.get('/about', (req, res) => {
    About.find({}).exec().then((abouts) => {
        res.send(abouts);
    }); 
 });

// Api call to get all appreciation information
router.get('/appreciation', (req, res) => {
    Appreciation.find({}).exec().then((appreciations) => {
        res.send(appreciations);
    }); 
 });

 // Api call to get all appreciation information
router.get('/videos', (req, res) => {
    Videos.find({}).exec().then((videos) => {
        res.send(videos);
    }); 
 });

// Express Router Middleware
app.use(router);

console.log("server running on 8080");
app.listen(8080);