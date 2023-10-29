const express = require("express");
const router = express.Router();
const messageListController = require("../controllers/messageListController");

router.get("/messageList", messageListController.getMessageList);

module.exports = router;
