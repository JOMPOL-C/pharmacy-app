const express = require("express");
const router = express.Router();
const path = require("path");

let products = [
  {
    id: 1,
    name: "Paracetamol",
    price: 10,
    stock: 100,
    description: "ยาแก้ปวดลดไข้",
    imageUrl:
      "https://www.krishlarpharma.com/wp-content/uploads/2019/12/KRITFEN-P-2-tablet.jpg",
  },
  {
    id: 2,
    name: "Antihistamine",
    price: 25,
    stock: 50,
    description: "ยาแก้แพ้",
    imageUrl:
      "https://d14bbfkcwbts4c.cloudfront.net/img/products/DA/da1ccc22-4af6-6506-5d5d-7a086bcaa6df_m.jpg",
  },
  {
    id: 3,
    name: "Vitamin C",
    price: 50,
    stock: 200,
    description: "วิตามินซี",
    imageUrl:
      "https://m.media-amazon.com/images/I/71DY1Q+t2FL._UF350,350_QL80_.jpg",
  },
];

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "admin.html"));
});

router.get("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
});



function getProducts() {
  return products;
}

router.get("/api/products", (req, res) => {
  res.json(getProducts());
});

module.exports = {
  router: router,
  products: products,
  getProducts: getProducts,
};
