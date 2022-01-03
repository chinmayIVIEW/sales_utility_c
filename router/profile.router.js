const { contact,contact_show } = require("../controllers/profile.controller")
const router = require("express").Router()



router.post('/contact',contact)
router.get('/contact-show',contact_show)





module.exports = router