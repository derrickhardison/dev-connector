const express = require("express");
const router = express.Router();

// @route   GET api/profile
// @desc    Test route
// @access  Public
//           - private routes require tokens
router.get("/", (req, res) => {
  res.send("profile route");
});

module.exports = router;
