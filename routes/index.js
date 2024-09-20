const express = require("express");
const { addUser, getUsers } = require("../controllers/user");
const router = express.Router();

router.post("/add-user", addUser);
router.post("/get-users", getUsers);

module.exports = router;
