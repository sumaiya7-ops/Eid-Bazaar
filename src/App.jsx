import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ShopProvider } from "./context/ShopContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Offers from "./components/Offers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/PaymentSuccess";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Offers />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <main className="bg-white min-h-screen font-sans antialiased text-gray-900 selection:bg-amber-200">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
               <Route path="/payment/success/:tranId" element={<PaymentSuccess />} />

          </Routes>

        </main>
      </BrowserRouter>
    </ShopProvider>
  );
}