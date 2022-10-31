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

// Creating a new blog
const create_blog = (req, res) =>{

    // creating a blog
    const blog = new Blog({
        title : 'Vitalis',
        description : 'This is my first name',
        owner : 'Cheborgei'
    })

    // Saving the blog
    blog.save()
    .then((results) =>{
        res.send(results)
    })
    .catch((error) =>{
        console.log(error)
    })

};

// Fetching a single blog using it's id
const single_blog = (req, res) =>{
    const id = req.params.id;

    // Finding using the id
    Blog.findById(id)
    .then((results) =>{
        res.send(results)
    })
    .catch((error) =>{
        console.log(error)
    });
};