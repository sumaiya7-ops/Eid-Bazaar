import { useState } from "react";
import { useShop } from "../context/ShopContext";
import { ShoppingCart, Star, Search } from "lucide-react";

const sampleProducts = [
  {
    id: 1,
    name: "Radhuni Chili Powder",
    category: "Spices",
    price: 220,
    oldPrice: 260,
    badge: "🔥 Best Seller",
    rating: 5,
    img: "https://i.postimg.cc/VN4pqzWG/1.png",
    company: "Radhuni",
    mfg: "10 May 2026",
    exp: "10 May 2027",
  },
  {
    id: 2,
    name: "Radhuni Coriander Powder",
    category: "Spices",
    price: 160,
    oldPrice: 200,
    badge: "🆕 New Arrival",
    rating: 5,
    img: "https://i.postimg.cc/jqy9c6cn/2.jpg",
    company: "Radhuni",
    mfg: "11 May 2026",
    exp: "11 May 2027",
  },
  {
    id: 3,
    name: "Radhuni Turmeric Powder",
    category: "Spices",
    price: 140,
    oldPrice: 180,
    badge: "🔥 Hot",
    rating: 5,
    img: "https://i.postimg.cc/nrTG5LCC/3.jpg",
    company: "Radhuni",
    mfg: "09 May 2026",
    exp: "09 May 2027",
  },
  {
  id: 4,
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
  id: 5,
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
  id: 6,
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
  id: 7,
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
  id: 8,
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
  id: 9,
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
  id: 10,
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
  id: 11,
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
  id: 12,
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
  id: 13,
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

export default function Products() {
  const { addToCart } = useShop();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Spices", "Eid Specials", "Drinks"];

  const filteredProducts = sampleProducts.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const visibleProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 6);

  return (
    <section id="products" className="py-20 px-6 max-w-7xl mx-auto">

      {/* HEADER */}
      <div className="text-center mb-14">
        <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold">
          Premium Collection
        </span>

        <h2 className="text-5xl font-extrabold mt-4 text-gray-900">
          Featured Products
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Explore our premium spices and Eid special collection
        </p>
      </div>

      {/* SEARCH */}
      <div className="relative max-w-xl mx-auto mb-10">
        <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-200 pl-12 pr-4 py-3 rounded-2xl outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      {/* CATEGORIES */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-5 py-2 rounded-full font-semibold transition ${
              category === cat
                ? "bg-amber-600 text-white"
                : "bg-gray-100 hover:bg-amber-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 group relative"
          >

            {/* BADGE */}
            <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
              {product.badge}
            </span>

            {/* IMAGE */}
            <div className="h-64 bg-gray-50 overflow-hidden">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-contain p-4 group-hover:scale-110 transition duration-700"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 text-center">

              <h3 className="text-xl font-bold text-gray-800">
                {product.name}
              </h3>

              {/* RATING */}
              <div className="flex justify-center mt-2 text-yellow-500">
                {[...Array(product.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* PRICE */}
              <div className="mt-3">
                <p className="text-gray-400 line-through">
                  ৳{product.oldPrice}
                </p>

                <p className="text-2xl font-bold text-amber-600">
                  ৳{product.price}
                </p>

                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold inline-block mt-2">
                  Save{" "}
                  {Math.round(
                    ((product.oldPrice - product.price) /
                      product.oldPrice) *
                      100
                  )}
                  %
                </span>
              </div>

              {/* BUTTON */}
              <button
                onClick={() => setSelectedProduct(product)}
                className="mt-5 w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2 transition"
              >
                <ShoppingCart size={20} />
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* VIEW MORE */}
      {!showAll && filteredProducts.length > 6 && (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="bg-gradient-to-r from-gray-900 to-black hover:scale-105 text-white px-10 py-4 rounded-2xl font-bold transition"
          >
            View More Products
          </button>
        </div>
      )}

      {/* MODAL */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full shadow"
            >
              ✕
            </button>

            {/* IMAGE */}
            <div className="h-72 overflow-hidden">
              <img
                src={selectedProduct.img}
                className="w-full h-full object-cover"
              />
            </div>

            {/* DETAILS */}
            <div className="p-6">

              <h3 className="text-3xl font-bold">
                {selectedProduct.name}
              </h3>

              <div className="mt-4">
                <p className="text-gray-400 line-through">
                  ৳{selectedProduct.oldPrice}
                </p>

                <p className="text-3xl font-bold text-amber-600">
                  ৳{selectedProduct.price}
                </p>
              </div>

              <div className="mt-6 space-y-2 text-gray-600">
                <p>
                  <strong>Company:</strong>{" "}
                  {selectedProduct.company}
                </p>
                <p>
                  <strong>Manufactured:</strong>{" "}
                  {selectedProduct.mfg}
                </p>
                <p>
                  <strong>Expiry Date:</strong>{" "}
                  {selectedProduct.exp}
                </p>
              </div>

              {/* ADD TO CART */}
              <button
                onClick={() => {
                  addToCart(selectedProduct);
                  setSelectedProduct(null);
                }}
                className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-bold"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}