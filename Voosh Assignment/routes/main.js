const express = require("express")
const login = require("../controllers/login")
const register = require("../controllers/register")
const home = require("../controllers/home")
const editDetails = require("../controllers/editDetails")
const signout = require("../controllers/signout")
const getDetails = require("../controllers/getDetails")
const authenticationMiddleware = require("../middlewares/authMiddleware")
const router = express.Router();


router.route('/login').post(login);
router.route("/getUserDetails").get(authenticationMiddleware,getDetails);
router.route("/editDetails").post(authenticationMiddleware,editDetails);
router.route('/register').post(register);
router.route('/signout').get();
router.route('/home').get(authenticationMiddleware,home);

module.exports = router;