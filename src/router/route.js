
const express = require("express")
const router = express.Router();
const collegeController = require("../controllers/collegeController")
const internController = require("../controllers/internController")

router.post("/functionup/colleges", collegeController.createCollege)

router.post("/functionup/interns", internController.createIntern)

router.get('/functionup/collegeDetails', collegeController.getCollegeDetails)

router.all('/*', function (req, res) { return res.status(400).send({ status: false, msg: "Enter Right URL Path" }) })


module.exports = router





