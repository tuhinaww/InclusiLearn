const express = require("express");
const router = express.Router();
const homepageController = require("../controllers/homepageController");

router.get("/homepage", homepageController.getHomepage);

module.exports = router;
