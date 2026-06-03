import { useState } from "react";
import { useShop } from "../context/ShopContext";

export default function Offers() {
  const { addToCart } = useShop();
  const [selectedDeal, setSelectedDeal] = useState(null);

  const deals = {
  combo: {
    id: 1001,
    name: "Eid Meat Combo Pack",
    price: 499,
    products: [
      "Chili Powder",
      "Turmeric Powder",
      "Cumin Powder",
      "Coriander Powder",
      "Garam Masala",
    ],
  },

  biryani: {
    id: 1002,
    name: "Biryani & Pulao Cooking Kit",
    price: 320,
    products: [
      "Biryani Masala",
      "Cardamom",
      "Clove",
      "Bay Leaf",
      "Cinnamon",
    ],
  },
};
  return (
    <section
      id="offers"
      className="relative bg-gradient-to-br from-amber-50 to-amber-100 py-20 px-6 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-300/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto text-center relative">

        {/* Header */}
        <h2 className="text-5xl font-extrabold text-amber-900 mb-4">
          🔥 Eid Mega Deals
        </h2>

        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Grab exclusive Eid discounts on premium spice combo packs and special cooking kits.
        </p>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Offer 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 border-l-4 border-red-500 text-left">

            <span className="bg-red-100 text-red-600 font-bold text-xs px-3 py-1 rounded-full">
              MEGA SAVE
            </span>

            <h4 className="font-bold text-2xl text-gray-800 mt-3">
              Eid Meat Combo Pack (5 Spices)
            </h4>

            <p className="text-gray-500 mt-2">
              Perfect mix of essential spices for your Eid cooking
            </p>

            <p className="text-amber-600 font-extrabold text-xl mt-4">
              <span className="line-through text-gray-400 font-normal mr-2">
                ৳650
              </span>
              ৳499
            </p>
           <button
  onClick={() => setSelectedDeal(deals.combo)}
  className="mt-6 bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-xl font-semibold"
>
  Grab Deal
</button>

          </div>

          {/* Offer 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 border-l-4 border-red-500 text-left">

            <span className="bg-red-100 text-red-600 font-bold text-xs px-3 py-1 rounded-full">
              LIMITED OFFER
            </span>

            <h4 className="font-bold text-2xl text-gray-800 mt-3">
              Biryani & Pulao Cooking Kit
            </h4>

            <p className="text-gray-500 mt-2">
              Everything you need for perfect festive rice dishes
            </p>

            <p className="text-amber-600 font-extrabold text-xl mt-4">
              <span className="line-through text-gray-400 font-normal mr-2">
                ৳400
              </span>
              ৳320
            </p>
          <button
  onClick={() => setSelectedDeal(deals.biryani)}
  className="mt-6 bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-xl font-semibold"
>
  Grab Deal
</button>

          </div>

        </div>

      </div>

      {selectedDeal && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-3xl w-full max-w-md p-6">

      <h2 className="text-2xl font-bold mb-4">
        {selectedDeal.name}
      </h2>

      <p className="text-gray-500 mb-4">
        Included Products:
      </p>

      <ul className="space-y-2 mb-6">
        {selectedDeal.products.map((item, index) => (
          <li
            key={index}
            className="bg-gray-100 p-2 rounded-lg"
          >
            ✅ {item}
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center mb-6">
        <span className="font-bold">
          Deal Price
        </span>

        <span className="text-amber-600 font-bold text-xl">
          ৳{selectedDeal.price}
        </span>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => setSelectedDeal(null)}
          className="flex-1 border py-3 rounded-xl"
        >
          Close
        </button>

        <button
          onClick={() => {
            addToCart(selectedDeal);
            setSelectedDeal(null);
          }}
          className="flex-1 bg-green-600 text-white py-3 rounded-xl"
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