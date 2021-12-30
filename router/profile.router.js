const { contact } = require("../controllers/profile.controller")
const router = require("express").Router()



router.post('/contact',contact)




module.exports = router