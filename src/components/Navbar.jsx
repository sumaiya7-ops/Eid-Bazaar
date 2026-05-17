import { useShop } from "../context/ShopContext";

export default function Navbar() {
  const { cart, totalPrice } = useShop();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-amber-50 shadow-md px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <div className="w-10 h-10 rounded-full bg-amber-500 overflow-hidden border-2 border-amber-600">
          <img src="profile.jpg" alt="Owner" className="w-full h-full object-cover" />
        </div>
        <span className="font-bold text-amber-900 text-lg hidden sm:inline">ঈদ বাজার</span>
      </div>

      <div className="flex gap-6 text-gray-700 font-semibold">
        <button onClick={() => scrollToSection("products")} className="hover:text-amber-600 transition">Products</button>
        <button onClick={() => scrollToSection("offers")} className="hover:text-amber-600 transition">Offers</button>
        <button onClick={() => scrollToSection("contact")} className="hover:text-amber-600 transition">Contact</button>
      </div>

      <div className="flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-full shadow">
        <span className="text-xl">🛒</span>
        <span className="bg-white text-amber-600 text-xs font-bold px-2 py-0.5 rounded-full">{cart.length}</span>
        <span className="text-sm font-medium ml-1">৳{totalPrice}</span>
      </div>
    </nav>
  );
}
