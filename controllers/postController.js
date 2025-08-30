const { addPost, getAllPost } = require("../models/post");

const showPostController = async (req, res) => {
    const posts = await getAllPost();
    res.render("main", { post: posts });
}

const formPostController = (req, res) => {
    res.render("form_post");
}

const addPostController = async (req, res) => {
    const { name, title, description } = req.body;
    const send = await addPost(name, title, description);
    if (send) {
        res.redirect("/");
    } else {
        res.redirect("add/post")
    }
}



module.exports = { showPostController, formPostController, addPostController }