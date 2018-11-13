var express = require('express');
var mongoose = require('mongoose');
var app = express();
var router = express.Router();

var postSchema = mongoose.Schema({}, { collection: 'post'});
var Post = mongoose.model('post', postSchema);

mongoose.connect('mongodb://127.0.0.1:27017/baap-strapi').then(() => {
    console.log('connected to database');
}, (err) => {
    console.error(err);
});

/*
router.get('/post', (req, res) => {
   Post.find({}).sort({ created: 'desc' }).limit(3).exec().then((posts) => {
       res.send(posts);
   }); 
});
 */

router.get('/post', (req, res) => {
   Post.find({}).exec().then((posts) => {
       res.send(posts);
   }); 
});

app.use(router);

console.log("server running on 8080");
app.listen(8080);