const router = require("express").Router();
const { UsersController } = require("../controllers/users.controller");

const usersController = new UsersController();

router.post("/v1/register", usersController.register);
router.post("/v1/login", usersController.login);

module.exports = router;
