const Products = require("../database/models/products.model");
const ErrorResponse = require("../helper/error.helper");

class ProductsController {
  async getProducts(req, res) {
    try {
      const result = await Products.findAll({
        attributes: ["userId", "productname", "stock", "price"],
      });
      console.log(result);
      if (!result) {
        res.status(400).json({
          message: "error disini",
        });
      }

      res.status(200).json({
        message: "Product get succesfully!",
        product: result,
      });
    } catch (error) {
      res.status(400).json({
        message: ErrorResponse,
      });
    }
  }

  async insertProducts(req, res) {
    try {
      const { userId, productname, price, stock } = req.body;
      const createProduct = await Products.create({
        userId,
        productname,
        price,
        stock,
      });
      res.status(200).json({
        message: "Product insert succesfully!",
        product: createProduct,
      });
    } catch (error) {
      console.log(error);
      res.json({
        message: "Add Product failed.",
      });
    }
  }

  async deleteProducts(req, res) {
    try {
      const result = await Products.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        message: "Product delete successfully!",
        product: result,
      });
    } catch (error) {
      console.log(error);
      res.json({
        message: "Product failed to delete.",
      });
    }
  }
}

module.exports = {
  ProductsController,
};
