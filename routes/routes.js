const express = require("express");
const router = express.Router();
const Products = require("../data/Products");

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/products", (req, res) => {
  res.render("products", {
    products: Products,
  });
});

router.get("/productdetail", (req, res) => {
  const GetProduct = Products.filter((product) => {
    return product.id == req.query.id;
  });
  console.log(GetProduct);
  res.render("productdetail", {
    product: GetProduct,
  });
});

router.get("*", (req, res) => {
  res.send("<h1>Page Not Found</h1>");
});

module.exports = router;
