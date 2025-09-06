const express = require("express");
const router = express.Router();
const path = require("path");

const { getProducts } = require("./admin");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

router.get("/cart",(req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "cart.html"));
});

router.get("/checkout",(req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "checkout.html"));
});

router.get("/api/products", (req, res) => {
  const products = getProducts();
  res.json(products);
});

module.exports = router;
