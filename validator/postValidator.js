const { body } = require("express-validator");

const addPostValidator = () => {
    console.time('addPost');
    return [
        body('name').notEmpty().withMessage("nama tidak boleh kosong"),
        body('title').notEmpty().withMessage("title tidak boleh kosong"),
        body('description').notEmpty().withMessage("deskripsi tidak boleh kosong"),
        body('description').isLength({ max: 200 }).withMessage("deskripsi tidak boleh lebih dari 200"),
    ]
}

module.exports = { addPostValidator };