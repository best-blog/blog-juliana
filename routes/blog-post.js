const express = require('express')
const router = express.Router();


router.get("/test", (req, res) => {
  res.json ({users: "post ok"})
}) 

module.exports = router;