/**
 * Created by arunbalajip on 8/25/2016.
 */
var mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;
var Schema = mongoose.Schema;
var commentsSchema = new Schema({
    comment: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    author: {
        type: String,
        required: true
    }

});
var DishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        default: ''
    },
    price: {
        type: Currency,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    comments: [commentsSchema]

});
var Dishes = mongoose.model("Dish", DishSchema);
module.exports = Dishes;