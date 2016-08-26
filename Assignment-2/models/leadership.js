/**
 * Created by arunbalajip on 8/25/2016.
 */
/**
 * Created by arunbalajip on 8/25/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var LeaderSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:true,
    },

    designation:{
        type:String,
        required:true
    },

    abbr:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    }
});
var Leaders = mongoose.model('Leader',LeaderSchema);
module.exports = Leaders;

