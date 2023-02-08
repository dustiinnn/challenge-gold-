const router = require("express").Router();
const { OrdersController } = require("../controllers/orders.controller");

const ordersController = new OrdersController();

router.get("/v1/orders/:id", ordersController.getOrders);
router.post("/v1/orders", ordersController.insertOrders);
router.patch("/v1/orders/:id", ordersController.updateOrders);

module.exports = router;
