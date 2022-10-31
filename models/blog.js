const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating a blog schema
const blogSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    owner : {
        type : String,
        required : true
    }
},
{timestamps : true}
);

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;