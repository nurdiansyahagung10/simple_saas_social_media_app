const { Firestore } = require("@google-cloud/firestore");
const firestore = new Firestore();
const pc = firestore.collection("post");

const getAllPost = async (lastvisible = null) => {
    let query = pc.orderBy("created_at", "desc");

    if (lastvisible) {
        query = query.startAfter(new Date(JSON.parse(lastvisible)));
    }
    const ck = await query.limit(11).get();
    const hasLoadMoreNext = ck.docs.length < 11 ? false : true;
    const pg = await query.limit(10).get();
    return {
        hasLoadMoreNext: hasLoadMoreNext,
        data: pg.docs.map(doc => doc.data()),
    };

}

const addPost = async (name, title, description) => {
    await pc.add({
        name,
        title,
        description,
        likes: 0,
        created_at: new Date()
    });

    return true;
}

module.exports = { getAllPost, addPost }
