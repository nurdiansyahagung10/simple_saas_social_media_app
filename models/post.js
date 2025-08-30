const { Firestore } = require("@google-cloud/firestore");
const firestore = new Firestore();
const session = require("express-session");
const pc = firestore.collection("post");

const getAllPost = async () => {
    const pg = await pc.orderBy("created_at", "desc").get();
    return pg.docs.map(item => item.data());
}

const addPost = async (name, description) => {
    await pc.add({
        name,
        title,
        description,
        likes: 0,
        created_at: new Date()
    });

    session.message = "Success add post";

    return true;
}

module.exports = { getAllPost, addPost }
