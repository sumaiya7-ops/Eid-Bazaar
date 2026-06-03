import { useState } from "react";
import { useShop } from "../context/ShopContext";
import axios from "axios";


export default function Navbar() {
const { cart, itemsTotal, totalPrice, deliveryCharge } = useShop();
  const [showCart, setShowCart] = useState(false);
   const [form, setForm] = useState({
  customerName: "",
  phone: "",
  address: "",
});
 

const handleCheckout = async () => {
  try {
  if (!form.customerName || !form.phone || !form.address) {
    alert("Please fill all fields");
    return;
  }


    const orderData = {
      customerName: form.customerName,
      phone: form.phone,
      address: form.address,

      products: cart,
      itemsTotal,
      deliveryCharge,
      totalPrice,
    };

    await axios.post(
      "http://localhost:5000/api/orders/create",
      orderData
    );

    alert("Order placed successfully!");

    setShowCart(false);
  } catch (err) {
    alert("Order failed!");
  }
};


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-md border-b border-amber-100 px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-amber-500 shadow-md">
            <img
              src="profile.jpg"
              alt="Store Owner"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
            />
          </div>

          <div>
            <h1 className="font-extrabold text-xl text-amber-700 tracking-wide">
              Eid Market
            </h1>
            <p className="text-xs text-gray-500 hidden sm:block">
              Premium Shopping Experience
            </p>
          </div>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-gray-700">
          <button
            onClick={() => scrollToSection("products")}
            className="hover:text-amber-600 transition duration-300"
          >
            Products
          </button>

          <button
            onClick={() => scrollToSection("offers")}
            className="hover:text-amber-600 transition duration-300"
          >
            Offers
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-amber-600 transition duration-300"
          >
            Contact
          </button>
        </div>

        {/* Cart */}
        <button
          onClick={() => setShowCart(true)}
          className="flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          <span className="text-xl">🛒</span>

          <span className="bg-white text-amber-700 text-xs font-bold min-w-[24px] h-6 flex items-center justify-center rounded-full px-2">
            {cart.length}
          </span>

          <span className="font-semibold hidden sm:block">
            ৳{totalPrice}
          </span>
        </button>
      </nav>

      {/* Cart Modal */}
      {showCart && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowCart(false)}
        >
          <div
            className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-5 text-white flex justify-between items-center">
              <h2 className="text-2xl font-bold">
                Shopping Cart
              </h2>

              <button
                onClick={() => setShowCart(false)}
                className="text-2xl hover:rotate-90 transition duration-300"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="p-5">
              <div className="space-y-3 mb-4">

  <input
    type="text"
    placeholder="Your Name"
    className="w-full border p-2 rounded"
    onChange={(e) =>
      setForm({ ...form, customerName: e.target.value })
    }
  />

  <input
    type="text"
    placeholder="Phone Number"
    className="w-full border p-2 rounded"
    onChange={(e) =>
      setForm({ ...form, phone: e.target.value })
    }
  />

  <input
    type="text"
    placeholder="Address"
    className="w-full border p-2 rounded"
    onChange={(e) =>
      setForm({ ...form, address: e.target.value })
    }
  />

</div>
              {cart.length === 0 ? (
                <div className="py-12 text-center">
                  <div className="text-6xl mb-3">🛒</div>

                  <h3 className="text-xl font-bold text-gray-700">
                    Your Cart Is Empty
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Add some amazing products to get started.
                  </p>
                </div>
              ) : (
                <>
                  <div className="space-y-3 max-h-[350px] overflow-y-auto">
                    {cart.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 rounded-xl bg-gray-50 border"
                      >
                        <div>
                          <h4 className="font-semibold text-gray-800">
                            {item.name}
                          </h4>

                          {item.quantity && (
                            <p className="text-sm text-gray-500">
                              Quantity: {item.quantity}
                            </p>
                          )}
                        </div>

                        <div className="font-bold text-amber-600">
                          ৳{item.price}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Total */}
                 {/* Total */}
<div className="mt-6 border-t pt-4 space-y-2">

  <div className="flex justify-between">
    <span>Products Total</span>
    <span>৳{itemsTotal}</span>
  </div>

  <div className="flex justify-between">
    <span>Delivery Charge</span>
    <span>৳{cart.length > 0 ? 60 : 0}</span>
  </div>

  <div className="flex justify-between items-center text-lg font-bold">
    <span>Total Amount</span>
    <span className="text-amber-600">
      ৳{totalPrice}
    </span>
  </div>

</div>

                    <button 
                   onClick={handleCheckout}
                    className="w-full mt-5 bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl font-semibold transition duration-300">
                      Proceed to Checkout
                    </button>
                  
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}