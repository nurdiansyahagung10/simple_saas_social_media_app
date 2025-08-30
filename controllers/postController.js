const { addPost, getAllPost } = require("../models/post");
const { validationResult } = require("express-validator");


const getPostController = async (req, res) => {
    const postsget = await getAllPost(req.query.lastVisible || null);
    const posts = postsget.data.map(item => ({
        ...item,
        created_at: item.created_at?.toDate() || null
    }));

    res.json({
        status: "success",
        lastVisible: posts[posts.length - 1].created_at,
        nextDataLength: postsget.hasLoadMoreNext,
        data: posts,
    });
}


const showPostController = async (req, res) => {
    res.render("main");
}

const formPostController = (req, res) => {
    res.render("post/add");
}

const addPostController = async (req, res) => {
    const { name, title, description } = req.body;
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        const send = await addPost(name, title, description);
        if (send) {
            req.session.success = `Berhasil menambah post dengan judul ${title}`;
            res.redirect("/add/post");
        } else {
            req.session.errors = ['Gagal menambah post dengan judul ${title}!'];
            res.redirect("/add/post")
        }
    } else {
        req.session.errors = errors.array().map(item => item.msg);
        res.redirect("/add/post")

    }
}



module.exports = { showPostController, formPostController, addPostController, getPostController }