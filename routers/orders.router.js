const router = require("express").Router();
const { OrdersController } = require("../controllers/orders.controller");

const ordersContro = new OrdersController();

router.get("/v1/orders/:id", ordersContro.getOrders);
router.post("/v1/orders", ordersContro.insertOrders);
router.put("/v1/orders", ordersContro.updateOrders);
router.delete("/v1/orders", ordersContro.deleteOrder);

module.exports = router;
