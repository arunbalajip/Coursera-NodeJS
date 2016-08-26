/**
 * Created by arunbalajip on 8/25/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var PromotionsSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:true,
    },
    label:{
        type:String,
        default:''
    },
    price:{
        type:Currency,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});
var Promotions = mongoose.model('Promotions',PromotionsSchema);
module.exports = Promotions;
