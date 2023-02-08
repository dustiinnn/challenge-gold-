const { response } = require("express");
const Orders = require("../database/models/orders.model");
const OrderItems = require("../database/models/ordersitems.model");
const Products = require("../database/models/products.model");
const errorResponse = require("../helper/error.helper");
const Response = require("../helper/response.helper");

class OrdersController {
  async getOrders(req, res) {
    try {
      const result = await Orders.findAll({
        where: { id: req.params.id, userId: req.body.id },
        // include: { OrderItems },
      });
      res.status(200).json({
        message: result,
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  }

  async insertOrders(req, res, next) {
    try {
      const insert = {
        userId: req.body.ID,
        productId: req.body.productId,
        qty: req.body.qty,
      };
      const cekuserId = await Orders.create({
        userId: insert.userId,
        statusorders: false,
      });

      const checkharga = await Products.findOne({
        where: { id: insert.productId },
        attributes: ["id", "stock", "price"],
      });

      let totalharga = insert.qty * parseInt(checkharga.price);
      const orderItems = {
        orderId: cekuserId.id,
        productId: insert.productId,
        qty: insert.qty,
        price: totalharga,
      };

      const insertOrderItems = await OrderItems.create(orderItems);

      return new Response(res, 200, insertOrderItems);
    } catch (error) {
      next(error);
    }
  }

  async updateOrders(req, res, next) {
    try {
      const insert = {
        userId: req.body.ID,
        orderId: req.params.id,
        statusorders: req.body.statusorders,
      };

      const harga = await Orders.findOne({
        where: { userId: insert.userId, id: insert.orderId },
        include: { model: OrderItems },
      });

      console.log(harga);
      if (!harga) {
        throw new errorResponse(404, "Order not found");
      }

      const ord = await Orders.update({
        totalprice: harga.OrderItems.price,
        statusorders: insert.statusorders,
      });

      console.log("test2");
      return new Response(res, 200, ord);
    } catch (error) {
      res.json({
        message: "Order update failed.",
        orders: error,
      });
    }
  }
}

module.exports = {
  OrdersController,
};
