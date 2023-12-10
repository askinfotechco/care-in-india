const express = require("express");
const router = express.Router();
const {
  addProduct,
  addAllProducts,
  getAllProducts,
  getProductById,
  updateProduct,
  updateManyProducts,
  updateStatus,
  deleteProduct,
  deleteManyProducts,
  getAllActiveProducts,
} = require("../controllers/product.controller");

//add a product
router.post("/add", addProduct);

//add multiple products
router.post("/add/all", addAllProducts);

//get a product
router.post("/:id", getProductById);

//get all active products
router.get("/active", getAllActiveProducts);

//get all products
router.get("/getall", getAllProducts);

//update a product
router.patch("/:id", updateProduct);

//update many products
router.patch("/update/many", updateManyProducts);

//update a product status
router.put("/status/:id", updateStatus);

//delete a product
router.delete("/:id", deleteProduct);

//delete many product
router.patch("/delete/many", deleteManyProducts);

module.exports = router;
