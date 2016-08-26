/**
 * Created by arunbalajip on 8/25/2016.
 */
/**
 * Created by arunbalajip on 8/25/2016.
 */
var mongoose = require('mongoose');
var Leaders = require('./models/leadership');
var url = 'mongodb://localhost:27017/cousera';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error',console.error.bind(console,'Connection error'));
db.once('open',function(){
    console.log('Db is Connected');
    Leaders.create({
        name: "Peter Pan",
        image: "images/alberto.png",
        designation: "Chief Epicurious Officer",
        abbr: "CEO",
        description: "Our CEO, Peter, . . ."
    },function (err,result) {
        if(err) throw err;
        console.log('1 row is inserted');
        db.close();
    });
});



