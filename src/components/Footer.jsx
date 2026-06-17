import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
  FaArrowUp,
} from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-amber-50 text-black overflow-hidden border-t border-white/10">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-extrabold mb-5 tracking-tight">
              Eid<span className="text-amber-500">Market</span>
            </h2>

            <p className="text-gray-600 leading-relaxed max-w-md">
              Premium spices, cooking essentials, Eid special combo offers
              and quality products delivered with trust and care.
              Making your Eid cooking easier, tastier and more memorable.
            </p>

            {/* Payment Methods */}
            <div className="mt-6">
              <p className="text-sm text-gray-900 mb-3">
                Accepted Payments
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-xs">
                  bKash
                </span>

                <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-xs">
                  Nagad
                </span>

                <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-xs">
                  Visa
                </span>

                <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-xs">
                  MasterCard
                </span>

                <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-xs">
                  Cash On Delivery
                </span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-6 text-black uppercase text-xs tracking-[0.2em]">
              Contact
            </h3>

            <ul className="space-y-4 text-gray-700 text-sm">
              <li>
                📧 <br />
                <span className="hover:text-amber-400 transition">
                  sumaiyakookie307@gmail.com
                </span>
              </li>

              <li>
                📞 <br />
                <span className="hover:text-amber-400 transition">
                  +880 1826459605
                </span>
              </li>

              <li>
                📍 <br />
                Bangladesh
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-6 text-black uppercase text-xs tracking-[0.2em]">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-900 text-sm">
              <li className="hover:text-amber-800 cursor-pointer transition">
                About Us
              </li>

              <li className="hover:text-amber-800 cursor-pointer transition">
                Products
              </li>

              <li className="hover:text-amber-800 cursor-pointer transition">
                Special Offers
              </li>

              <li className="hover:text-amber-800 cursor-pointer transition">
                Contact
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold mb-6 text-black uppercase text-xs tracking-[0.2em]">
              Follow Us
            </h3>

            <div className="flex flex-wrap gap-3">

              <a
                href="#"
                className="w-11 h-11 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-red-600 hover:scale-110 transition-all duration-300"
              >
                <FaYoutube size={18} />
              </a>

                        <a
                href="#"
                className="w-11 h-11 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent "
              >
                <FaInstagram size={18} />
              </a>
            </div>

            <p className="text-gray-500 text-sm mt-5">
              Stay connected for the latest Eid deals and offers.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-900 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Eid Market.
            All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <span className="hover:text-white cursor-pointer transition">
              Privacy Policy
            </span>

            <span className="hover:text-white cursor-pointer transition">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>

      {/* Back To Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-amber-500 hover:bg-amber-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}