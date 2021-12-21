const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {type: String, required: true},
  rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 3
  },
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  userName: String 

},
{
    timestamps: true
}
);


const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    releaseYear: {
        type: Number,
        default: function () {
            return new Date().getFullYear();
        },
    },
    author:{
        type: String 
    },
    reviews: [reviewSchema],
    
}, 
{
    timestamps: true 
}
);

module.exports = mongoose.model('Book', bookSchema);