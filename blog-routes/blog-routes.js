const express = require('express');
 const router = express.Router();

 const blogControllers = require('../controllers/blog-controllers');

//  Fetch all blogs
router.get('/', blogControllers.all_blogs);

// Creating a new blog
router.get('/create-blog', blogControllers.create_blog);

// Getting a single blog
router.get('/single-blog', blogControllers.single_blog);

module.exports = router;