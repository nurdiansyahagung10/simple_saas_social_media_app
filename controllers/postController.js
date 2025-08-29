const {addPost, getAllPost} = require("../models/post");

const showPost = async (req, res) => {
    const posts = await getAllPost();
    // console.log(posts);
    res.render('main', { post: posts });
}

module.exports = { showPost }