const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);


app.use("/api/orders", orderRoutes);
// MongoDB Connect
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