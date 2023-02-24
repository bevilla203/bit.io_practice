const router = require('express').Router();
const {User: Users}=require("../db");

router.get('/', async (req, res, next) => {
    try {
        const users = await Users.findAll({
            attributes: ['id', 'fName', 'username']
        })
        res.json(users)
    }
    catch (error) {
        next(error)
    }
})

// GET /api/users/:userId
router.get('/:userId', async (req, res, next) => {
    try {
        const user = await Users.findByPk(req.params.userId)
        res.json(user)
    }
    catch (error) {
        next(error)
    }
})

module.exports = router;