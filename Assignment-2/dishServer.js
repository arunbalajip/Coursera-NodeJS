/**
 * Created by arunbalajip on 8/25/2016.
 */
var mongoose = require('mongoose');
var dishes = require('./models/dishes');
var url = 'mongodb://localhost:27017/cousera';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', function () {
    console.log("Connection established");

    dishes.create({
        name:'Uthapizza',
        image:'images/uthapizza.png',
        category:'mains',
        label:'Hot',
        price:'4.99',
        description:'A unique . . .',
        comments:[
            {
                rating:5,
                comment:'Imagine all the eatables, living in conFusion!',
                author:'John Lemon'
            }
        ]
    },function (err,result) {
        if(err) throw err;
        console.log('1 row inserted');
        console.log(result);
        result.comments.push({
            rating:4,
            comment:'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
            author:'Paul McVites'
        });
        result.save(function(err, result){
           if(err) throw err;
            console.log("One comment added");
            console.log(result);
            db.close();
        });
    });
});