/**
 * Created by arunbalajip on 8/25/2016.
 */
var mongoose = require('mongoose');
var Promotions = require('./models/promotions');
var url = 'mongodb://localhost:27017/cousera';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error',console.error.bind(console,'Connection error'));
db.once('open',function(){
   console.log('Db is Connected');
    Promotions.create({
        name: "Weekend Grand Buffet",
        image: "images/buffet.png",
        label: "New",
        price: "19.99",
        description: "Featuring . . ."
    },function (err,result) {
        if(err) throw err;
        console.log('1 row is inserted');
        db.close();
    });
});
