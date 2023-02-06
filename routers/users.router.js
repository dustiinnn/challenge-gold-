const router = require("express").Router();
const { UsersController } = require("../controllers/users.controller");

const usersController = new UsersController();

router.post("/v1/register", usersController.register);
router.get("v1/login,");
module.exports = router;
