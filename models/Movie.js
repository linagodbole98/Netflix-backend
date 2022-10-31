const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
   title :{type:String, required: true, unique:true},
   desc :{type:String},
   img:{type:String},  //screen image
   imgTitle:{type:String},  //title image
   imgSm:{type:String},  // thumbnel image 
   trailer:{type:String},
   video:{type:String},
   year :{type:String},
   limit:{type:Number},
   genre:{type:String},
   isSeries:{type:Boolean, default:false}

},{timestamps:true}
)

module.exports = mongoose.model("Movie", MovieSchema)