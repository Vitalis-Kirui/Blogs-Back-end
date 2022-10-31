const Blog = require('../models/blog')

// Fetching all blogs from database
const all_blogs = (req, res) =>{
    Blog.find()
    .then((results) =>{
        res.send(results)
    })
    .catch((error) =>{
        console.log(error)
    })
};