const express = require("express");
const chatController = require("../controllers/chatController");
const { secured } = require("../middlewares/secured");

const router = express.Router();

router.get("/", secured, chatController.getChats);
router.post("/", secured, chatController.postChats);

router.get("/msg/:chatId", secured, chatController.getMessage);
router.post("/msg", secured, chatController.postMessage);

module.exports = router;
