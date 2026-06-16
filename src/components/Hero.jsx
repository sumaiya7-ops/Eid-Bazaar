export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-amber-50 text-white">
      
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="max-w-2xl text-center md:text-left">
          
          <span className="inline-block bg-white text-black backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium mb-5">
            ✨ Special Eid Collection 2026
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold text-black/70 leading-tight mb-6">
            Eid Mubarak
            <span className="block text-amber-400">
              Celebrate With Premium Flavors
            </span>
          </h1>

          <p className="text-lg md:text-xl text-amber-300 leading-relaxed mb-8">
            Discover our exclusive collection of premium spices,
            fresh ingredients, and delicious food items specially
            selected for your Eid-ul-Adha celebration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            
            <button
              onClick={() =>
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white text-amber-700 font-bold px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition duration-300"
            >
              Shop Now
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("offers")
                  ?.scrollIntoView({ behavior: "smooth" })
              } 
              className="bg-amber-200 text-black px-8 py-4 rounded-xl font-semibold hover:bg-white transition duration-300"
            >
              View Offers
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-10 justify-center md:justify-start">
            <div>
              <h3 className="text-3xl text-black/70 font-bold">100+</h3>
              <p className="text-amber-500 text-sm">Premium Products</p>
            </div>

            <div>
              <h3 className="text-3xl text-black/70 font-bold">500+</h3>
              <p className="text-amber-500 text-sm">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-3xl text-black/70 font-bold">24/7</h3>
              <p className="text-amber-500 text-sm">Customer Support</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          
          <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl scale-110"></div>

          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
            <img
              src="profile.jpg"
              alt="Eid Collection"
              className="w-full h-full object-cover hover:scale-110 transition duration-700"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-4 -left-4 bg-white text-amber-700 px-5 py-3 rounded-2xl shadow-xl font-bold">
            🎉 Eid Special Deals
          </div>
        </div>
      </div>
    </section>
  );
}
