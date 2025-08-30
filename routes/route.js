const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const PostValidator = require("../validator/postValidator")

router.get('/', postController.showPostController);
router.get('/api/post/get', postController.getPostController);
router.get('/add/post', postController.formPostController);
router.post('/add/post', PostValidator.addPostValidator(), postController.addPostController);

module.exports = router;