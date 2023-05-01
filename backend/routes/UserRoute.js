const express = require("express");

const UserController = require("../controllers/UserController");

const router = express.Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/login", UserController.getLogin);
router.get("/logout", UserController.logout);

module.exports = router;
