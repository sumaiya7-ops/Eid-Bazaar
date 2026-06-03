const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product");

const sampleProducts = [
  {
    name: "Radhuni Chili Powder",
    price: 220,
    oldPrice: 260,
    category: "Spices",
    img: "https://i.postimg.cc/VN4pqzWG/1.png",
    badge: "🔥 Best Seller",
    rating: 5,
    company: "Radhuni",
    mfg: "10 May 2026",
    exp: "10 May 2027",
  },
  {
    name: "Radhuni Coriander Powder",
    price: 160,
    oldPrice: 200,
    category: "Spices",
    img: "https://i.postimg.cc/jqy9c6cn/2.jpg",
    badge: "🆕 New Arrival",
    rating: 5,
    company: "Radhuni",
    mfg: "11 May 2026",
    exp: "11 May 2027",
  },
  {
    name: "Radhuni Turmeric Powder",
    price: 140,
    oldPrice: 180,
    category: "Spices",
    img: "https://i.postimg.cc/nrTG5LCC/3.jpg",
    badge: "🔥 Hot",
    rating: 5,
    company: "Radhuni",
    mfg: "09 May 2026",
    exp: "09 May 2027",
  },
 {
   
    name: "Radhuni Cumin Powder",
    category: "Spices",
    price: 150,
    oldPrice: 190,
    badge: "⭐ Premium",
    rating: 5,
    img: "https://i.postimg.cc/kGMxxdwW/4.jpg",
    company: "Radhuni",
    mfg: "07 May 2026",
    exp: "07 May 2027",
  },
  {
  
    name: "Radhuni Cardamom",
    category: "Spices",
    price: 320,
    oldPrice: 380,
    badge: "🌿 Organic",
    rating: 5,
    img: "https://i.postimg.cc/rpJs5RbM/5.jpg",
    company: "Radhuni",
    mfg: "06 May 2026",
    exp: "06 May 2027",
  },
  {
   
    name: "Radhuni Clove",
    category: "Spices",
    price: 280,
    oldPrice: 340,
    badge: "🔥 Hot",
    rating: 5,
    img: "https://i.postimg.cc/gjf2GVwt/6.jpg",
    company: "Radhuni",
    mfg: "05 May 2026",
    exp: "05 May 2027",
  },
  {
   
    name: "Radhuni Bay Leaf",
    category: "Spices",
    price: 90,
    oldPrice: 120,
    badge: "🌿 Natural",
    rating: 4,
    img: "https://www.radhuni.com/wp-content/uploads/2020/08/Tejpata.png",
    company: "Radhuni",
    mfg: "08 May 2026",
    exp: "08 May 2027",
  },
  {
  
    name: "Radhuni Beef Masala",
    category: "Eid Specials",
    price: 180,
    oldPrice: 230,
    badge: "🥩 Eid Special",
    rating: 5,
    img: "https://www.radhuni.com/wp-content/uploads/2020/08/Beef-Masala.png",
    company: "Radhuni",
    mfg: "10 May 2026",
    exp: "10 May 2027",
  },
  {

    name: "Radhuni Roast Masala",
    category: "Eid Specials",
    price: 170,
    oldPrice: 220,
    badge: "🍗 Popular",
    rating: 5,
    img: "https://www.radhuni.com/wp-content/uploads/2020/08/Roast-Masala.png",
    company: "Radhuni",
    mfg: "10 May 2026",
    exp: "10 May 2027",
  },
  {
    
    name: "Radhuni Biryani Masala",
    category: "Eid Specials",
    price: 190,
    oldPrice: 240,
    badge: "🍛 Best Seller",
    rating: 5,
    img: "https://www.radhuni.com/wp-content/uploads/2020/08/Biryani-Masala.png",
    company: "Radhuni",
    mfg: "12 May 2026",
    exp: "12 May 2027",
  },
  {
   
    name: "Radhuni Haleem Mix",
    category: "Eid Specials",
    price: 120,
    oldPrice: 160,
    badge: "🕌 Eid Special",
    rating: 5,
    img: "https://www.radhuni.com/wp-content/uploads/2020/08/Haleem-Masala.png",
    company: "Radhuni",
    mfg: "03 May 2026",
    exp: "03 May 2027",
  },
  {
   
    name: "Radhuni Khichuri Mix",
    category: "Eid Specials",
    price: 110,
    oldPrice: 150,
    badge: "🍲 Special",
    rating: 4,
    img: "https://www.radhuni.com/wp-content/uploads/2020/08/Khichuri-Masala.png",
    company: "Radhuni",
    mfg: "04 May 2026",
    exp: "04 May 2027",
  },
  {

    name: "Radhuni Chicken Masala",
    category: "Spices",
    price: 170,
    oldPrice: 210,
    badge: "🍗 Chicken",
    rating: 5,
    img: "https://www.radhuni.com/wp-content/uploads/2020/08/Chicken-Masala.png",
    company: "Radhuni",
    mfg: "06 May 2026",
    exp: "06 May 2027",
  }


];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected");

    await Product.insertMany(sampleProducts);

    console.log("Products Added Successfully");

    mongoose.disconnect();
  })
  .catch((err) => {
    console.log("Error:", err);
  });