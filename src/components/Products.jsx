import { useState } from "react";
import { useShop } from "../context/ShopContext";
import { ShoppingCart, Star, Search } from "lucide-react";

const sampleProducts = [
  {
    id: 1,
    name: "রাঁধুনী মরিচ গুঁড়া",
    category: "মশলা",
    price: 220,
    oldPrice: 260,
    badge: "🔥 জনপ্রিয়",
    rating: 5,
    

    company: "রাঁধুনী",
    mfg: "10/05/2026",
    exp: "10/05/2027",
  },

  {
    id: 2,
    name: "রাঁধুনী ধনিয়া গুঁড়া",
    category: "মশলা",
    price: 160,
    oldPrice: 200,
    badge: "🆕 Fresh",
    rating: 5,
    img: "https://www.radhuni.com/wp-content/uploads/2020/08/Dhonia-Gura.png",
    company: "রাঁধুনী",
    mfg: "11/05/2026",
    exp: "11/05/2027",
  },

  {
    id: 3,
    name: "রাঁধুনী হলুদ গুঁড়া",
    category: "মশলা",
    price: 140,
    oldPrice: 180,
    badge: "🔥 Hot",
    rating: 5,
    img: "https://www.radhuni.com/wp-content/uploads/2020/08/Holud-Gura.png",
    company: "রাঁধুনী",
    mfg: "09/05/2026",
    exp: "09/05/2027",
  },

  {
    id: 4,
    name: "রাঁধুনী জিরা গুঁড়া",
    category: "মশলা",
    price: 150,
    oldPrice: 190,
    badge: "⭐ Premium",
    rating: 5,
    img: "https://www.radhuni.com/wp-content/uploads/2020/08/Jira-Gura.png",
    company: "রাঁধুনী",
    mfg: "07/05/2026",
    exp: "07/05/2027",
  },

  {
    id: 5,
    name: "রাঁধুনী এলাচ",
    category: "মশলা",
    price: 320,
    oldPrice: 380,
    badge: "🌿 Organic",
    rating: 5,
    img: "https://www.radhuni.com/wp-content/uploads/2020/08/Elach.png",
    company: "রাঁধুনী",
    mfg: "06/05/2026",
    exp: "06/05/2027",
  },

  {
    id: 6,
    name: "রাঁধুনী লবঙ্গ",
    category: "মশলা",
    price: 280,
    oldPrice: 340,
    badge: "🔥 Best",
    rating: 5,
    img: "https://www.radhuni.com/wp-content/uploads/2020/08/Lobongo.png",
    company: "রাঁধুনী",
    mfg: "05/05/2026",
    exp: "05/05/2027",
  },

  {
    id: 7,
    name: "রাঁধুনী তেজপাতা",
    category: "মশলা",
    price: 90,
    oldPrice: 120,
    badge: "🌿 Natural",
    rating: 4,
    img: "https://www.radhuni.com/wp-content/uploads/2020/08/Tejpata.png",
    company: "রাঁধুনী",
    mfg: "08/05/2026",
    exp: "08/05/2027",
  },

  {
    id: 8,
    name: "রাঁধুনী গরুর মাংসের মশলা",
    category: "মশলা",
    price: 180,
    oldPrice: 230,
    badge: "🥩 Beef",
    rating: 5,
    img: "https://www.radhuni.com/wp-content/uploads/2020/08/Beef-Masala.png",
    company: "রাঁধুনী",
    mfg: "10/05/2026",
    exp: "10/05/2027",
  },

  {
    id: 9,
    name: "রাঁধুনী রোস্ট মশলা",
    category: "মশলা",
    price: 170,
    oldPrice: 220,
    badge: "🍗 Roast",
    rating: 5,
    img: "https://www.radhuni.com/wp-content/uploads/2020/08/Roast-Masala.png",
    company: "রাঁধুনী",
    mfg: "10/05/2026",
    exp: "10/05/2027",
  },

  {
    id: 10,
    name: "রাঁধুনী বিরিয়ানি মশলা",
    category: "মশলা",
    price: 190,
    oldPrice: 240,
    badge: "🍛 Biryani",
    rating: 5,
    img: "https://www.radhuni.com/wp-content/uploads/2020/08/Biryani-Masala.png",
    company: "রাঁধুনী",
    mfg: "12/05/2026",
    exp: "12/05/2027",
  },

  {
    id: 11,
    name: "রাঁধুনী হালিম মশলা",
    category: "মশলা",
    price: 120,
    oldPrice: 160,
    badge: "🕌 Eid",
    rating: 5,
    img: "https://www.radhuni.com/wp-content/uploads/2020/08/Haleem-Masala.png",
    company: "রাঁধুনী",
    mfg: "03/05/2026",
    exp: "03/05/2027",
  },

  {
    id: 12,
    name: "রাঁধুনী খিচুড়ি মশলা",
    category: "মশলা",
    price: 110,
    oldPrice: 150,
    badge: "🍲 Special",
    rating: 4,
    img: "https://www.radhuni.com/wp-content/uploads/2020/08/Khichuri-Masala.png",
    company: "রাঁধুনী",
    mfg: "04/05/2026",
    exp: "04/05/2027",
  },

  {
    id: 13,
    name: "রাঁধুনী চিকেন মশলা",
    category: "মশলা",
    price: 170,
    oldPrice: 210,
    badge: "🍗 Chicken",
    rating: 5,
    img: "https://www.radhuni.com/wp-content/uploads/2020/08/Chicken-Masala.png",
    company: "রাঁধুনী",
    mfg: "06/05/2026",
    exp: "06/05/2027",
  },
];

export default function Products() {
  const { addToCart } = useShop();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("সব");

  const categories = ["সব", "মশলা", "ঈদ স্পেশাল", "ড্রিংকস"];

  const filteredProducts = sampleProducts.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "সব" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const visibleProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 6);

  return (
    <section
      id="products"
      className="py-16 px-6 max-w-7xl mx-auto"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-800">
          🕌 ঈদ স্পেশাল পণ্যসমূহ
        </h2>
        <p className="text-gray-500 mt-3">
          আপনার রান্নাঘরের জন্য সেরা মানের পণ্য
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-xl mx-auto mb-8">
        <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="পণ্য খুঁজুন..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 pl-12 pr-4 py-3 rounded-2xl outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-5 py-2 rounded-full font-medium transition ${
              category === cat
                ? "bg-amber-600 text-white"
                : "bg-gray-100 hover:bg-amber-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden group relative"
          >
            {/* Badge */}
            <span className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow">
              {product.badge}
            </span>

            {/* Image */}
            <div className="h-60 overflow-hidden">
              <img
                src={product.img}
                alt={product.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold text-gray-800">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex justify-center mt-2 text-yellow-500">
                {[...Array(product.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Price */}
              <div className="mt-3">
                <p className="text-gray-400 line-through">
                  ৳{product.oldPrice}
                </p>
                <p className="text-2xl font-bold text-amber-600">
                  ৳{product.price}
                </p>
              </div>

              {/* Button */}
              <button
                onClick={() => setSelectedProduct(product)}
                className="mt-5 w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 transition"
              >
                <ShoppingCart size={20} />
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      {!showAll && filteredProducts.length > 6 && (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-2xl font-semibold transition"
          >
            আরো পণ্য দেখুন
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl animate-fade-in relative">
            {/* Close */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full shadow text-xl"
            >
              ✕
            </button>

            {/* Image */}
            <div className="h-72 overflow-hidden">
              <img
                src={selectedProduct.img}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-3xl font-bold text-gray-800">
                {selectedProduct.name}
              </h3>

              <div className="flex items-center gap-2 mt-3 text-yellow-500">
                {[...Array(selectedProduct.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>

              <div className="mt-4">
                <p className="text-gray-400 line-through">
                  ৳{selectedProduct.oldPrice}
                </p>
                <p className="text-3xl font-bold text-amber-600">
                  ৳{selectedProduct.price}
                </p>
              </div>

              {/* Details */}
              <div className="mt-6 border-t pt-4 space-y-3 text-gray-600">
                <p>
                  <strong>কোম্পানি:</strong>{" "}
                  {selectedProduct.company}
                </p>

                <p>
                  <strong>তৈরির তারিখ:</strong>{" "}
                  {selectedProduct.mfg}
                </p>

                <p>
                  <strong>মেয়াদ:</strong>{" "}
                  {selectedProduct.exp}
                </p>
              </div>

              {/* Add to Cart */}
              <button
                onClick={() => {
                  addToCart(selectedProduct);
                  setSelectedProduct(null);
                }}
                className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-lg font-bold transition shadow-lg"
              >
                ✅ Confirm Buy & Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}