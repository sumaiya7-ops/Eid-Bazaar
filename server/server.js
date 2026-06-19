const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });

const SSLCommerzPayment = require("sslcommerz-lts");

const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// ========================
// PAYMENT INIT
// ========================
app.post("/api/payment/init", async (req, res) => {
  const { name, phone, address, totalAmount } = req.body;

  const tran_id = "REF-" + Date.now();

  const data = {
    total_amount: Number(totalAmount),
    currency: "BDT",
    tran_id,

    success_url: `http://localhost:5000/api/payment/success/${tran_id}`,
    fail_url: `http://localhost:5000/api/payment/fail/${tran_id}`,
    cancel_url: `http://localhost:5000/api/payment/cancel/${tran_id}`,

    shipping_method: "Courier",
    product_name: "Eid Bazaar Products",
    product_category: "E-commerce",
    product_profile: "general",

    cus_name: name || "Customer",
    cus_email: "customer@mail.com",
    cus_add1: address || "Dhaka",
    cus_city: "Dhaka",
    cus_postcode: "1207",
    cus_country: "Bangladesh",
    cus_phone: phone || "01700000000",

    ship_name: name || "Customer",
    ship_add1: address || "Dhaka",
    ship_city: "Dhaka",
    ship_postcode: "1207",
    ship_country: "Bangladesh",
  };

  // ✅ SSLCommerz INIT (AUTO FROM .env)
  const sslcz = new SSLCommerzPayment(
    process.env.STORE_ID,
    process.env.STORE_PASSWORD,
    process.env.IS_LIVE === "true"
  );

  try {
    const apiResponse = await sslcz.init(data);

    console.log("SSL RESPONSE:", apiResponse);

    if (apiResponse?.GatewayPageURL) {
      return res.json({ url: apiResponse.GatewayPageURL });
    }

    return res.status(400).json(apiResponse);
  } catch (error) {
    console.log("SSL ERROR:", error);
    return res.status(500).json(error);
  }
});

// ========================
// SUCCESS / FAIL
// ========================
app.post("/api/payment/success/:tranId", (req, res) => {
  res.redirect(`http://localhost:5177/payment/success/${req.params.tranId}`);
});

app.post("/api/payment/fail/:tranId", (req, res) => {
  res.redirect(`http://localhost:5177/payment/fail/${req.params.tranId}`);
});

app.post("/api/payment/cancel/:tranId", (req, res) => {
  res.redirect(`http://localhost:5177/payment/cancel/${req.params.tranId}`);
});

// ========================
// MONGO DB
// ========================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error:", err));

app.get("/", (req, res) => {
  res.send("Eid Market API Running");
});

app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT);
});