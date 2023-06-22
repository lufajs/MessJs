const express = require("express");
const authController = require("../controllers/authController");
const { secured } = require("../middlewares/secured");

const router = express.Router();

router.get("/", secured, authController.users);
router.post("/", authController.signup);
router.post("/login", authController.login);

module.exports = router;
