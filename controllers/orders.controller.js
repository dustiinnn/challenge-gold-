const Orders = require("../database/models/orders.model");
const OrderItems = require("../database/models/ordersitems.model");
const Products = require("../database/models/products.model");

class OrdersController {
  async getOrders(req, res, next) {
    try {
      const result = await Orders.findAll({
        include: {
          model: Products,
        },
      });
      res.status(200).json({
        message: result,
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
    /* const resultById = await Orders.findAll({
      where: { id: req.params.id },
      attributes: ["UserId", "StatusOrders", "TotalPrice"],
    }); */
  }

  async insertOrders(req, res, next) {
    try {
      const xp = {
        OrderId: req.body.OrderId,
        ProductId: req.body.ProductId,
        Qty: req.body.Qty,
        Price: req.body.Price,
      };
      console.log(xp);
      const result = await OrderItems.create(xp);

      // const resultById = await Orders.create({
      //   UserId: req.body.UserId,
      //   StatusOrders: req.body.StatusOrders,
      //   TotalPrice: req.body.TotalPrice,
      // });
      // res.status(200).json({
      //   message: "Success!",
      //   data: resultById,
      // });
      res.status(200).json({
        //message: "Success!",
        data: insert,
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  }

  async updateOrders(req, res, next) {
    try {
      const result = await Orders.update({
        UserId: req.body.UserId,
        ProductName: req.body.ProductName,
      });
      res.status(200).json(
        {
          message: "Order update succesfully!",
          orders: result,
        },
        {
          where: {
            id: req.id,
          },
        }
      );
    } catch (error) {
      res.json({
        message: "Order update failed.",
        orders: error,
      });
    }
  }

  async deleteOrder(req, res, next) {
    try {
      const { id } = req.params;
      const result = await Orders.destroy({
        where: { id },
      });
      res.status(200).json({
        message: "Order delete succesfully!",
        orders: result,
      });
    } catch (error) {
      res.json({
        message: "Order delete failed.",
        orders: error,
      });
    }
  }
}

module.exports = {
  OrdersController,
};
