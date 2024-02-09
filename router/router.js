const express=require("express")
const {Something,testing,sendMail}=require("../controllers/controle")
const router=express.Router()




router.route("/").get(Something)
router.route("/test").get(testing)
router.route("/sendemail").get(sendMail)
module.exports =router;