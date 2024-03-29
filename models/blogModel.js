'use strict'
const { ObjectId, Timestamp } = require('mongodb');
var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
    // _id: ObjectId,
    author: String,
    author_name: String,
    product_img: {
        type:String,
        default: 'https://cdn.discordapp.com/attachments/406860361086795776/1107037653288878120/No_image_available.png'
    },
    product_name: String,
    price: Number,
    shipping_cost: Number,
    description: String,
    likes: {
        type:Array,
        default:[]
    },
    time: Date,
    sold: Boolean,
    categories: Array,
    reward: {
        type: Boolean,
        default: false
    },
    announce: {
        type: Boolean,
        default: false
    },
    event:{
        type: Boolean,
        default: false
    },
    offers: Array,
},{collection : 'blogs'});

module.exports = mongoose.model('Blogs', blogSchema);