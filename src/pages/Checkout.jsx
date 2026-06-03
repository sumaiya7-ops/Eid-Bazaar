import { useShop } from "../context/ShopContext";
import { useState } from "react";

export default function Checkout() {
  const { cart, itemsTotal, deliveryCharge, totalPrice } = useShop();

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleOrder = (e) => {
    e.preventDefault();

    setOrderPlaced(true);

    setTimeout(() => {
      alert("Order placed successfully!");
      window.location.href = "/";
    }, 1500);
  };

  if (orderPlaced) {
    return (
      <div className="h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-3xl font-bold">🎉 Order Placed!</h1>
          <p className="text-gray-500 mt-2">
            Please wait, redirecting...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Checkout
      </h1>

      {/* ORDER SUMMARY */}
      <div className="border p-4 rounded-xl mb-6 space-y-2">
        <h2 className="font-bold text-lg mb-2">
          Order Summary
        </h2>

        <div className="flex justify-between">
          <span>Products Total</span>
          <span>৳{itemsTotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery Charge</span>
          <span>৳{deliveryCharge}</span>
        </div>

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>৳{totalPrice}</span>
        </div>
      </div>

      {/* FORM */}
      <form onSubmit={handleOrder} className="space-y-4">

        <input
          required
          placeholder="Full Name"
          className="w-full border p-3 rounded-lg"
        />

        <input
          required
          placeholder="Phone Number"
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          required
          placeholder="Delivery Address"
          className="w-full border p-3 rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-xl font-bold"
        >
          Place Order (Cash on Delivery)
        </button>
      </form>
    </div>
  );
}