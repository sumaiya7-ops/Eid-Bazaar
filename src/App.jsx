import { ShopProvider } from "./context/ShopContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Offers from "./components/Offers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ShopProvider>
      <main className="bg-white min-h-screen font-sans antialiased text-gray-900 selection:bg-amber-200">
        {/* নেভিগেশন বার */}
        <Navbar />
        
        {/* ঈদ শুভেচ্ছা ব্যানার */}
        <Hero />
        
        {/* প্রোডাক্ট লিস্ট ও মোডাল */}
        <Products />
        
        {/* স্পেশাল অফার সেকশন */}
        <Offers />
        
        {/* কন্ট্যাক্ট ফর্ম ও সোশ্যাল লিংক */}
        <Contact />
        
        {/* আপনার রিকোয়েস্ট করা ফুটার */}
        <Footer />
      </main>
    </ShopProvider>
  );
}

