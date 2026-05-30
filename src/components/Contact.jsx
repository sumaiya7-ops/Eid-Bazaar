export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("আপনার মেসেজটি সফলভাবে পাঠানো হয়েছে!");
    e.target.reset();
  };

  return (
    <section id="contact" className="py-16 px-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">যোগাযোগ করুন</h2>
        <p className="text-gray-600 mb-6">যেকোনো প্রশ্ন বা অর্ডারের জন্য আমাদের মেসেজ দিন অথবা সোশ্যাল মিডিয়ায় যুক্ত হোন।</p>
        <div className="space-y-3 font-medium text-gray-700">
          <p>📧 Email: <a href="mailto:your-email@example.com" className="text-amber-600 hover:underline">your-email@example.com</a></p>
          <p>🔗 LinkedIn: <a href="www.linkedin.com/in/sumaiya-sorhad" target="_blank" className="text-amber-600 hover:underline">yourprofile</a></p>
          <p>📞 Phone: <span className="text-amber-600">+880 1826459605</span></p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-xl border space-y-4 shadow-sm">
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">আপনার নাম</label>
          <input type="text" required className="w-full border p-2 rounded-lg bg-white outline-none focus:border-amber-600" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">মেসেজ</label>
          <textarea rows="4" required className="w-full border p-2 rounded-lg bg-white outline-none focus:border-amber-600"></textarea>
        </div>
        <button type="submit" className="w-full bg-amber-600 text-white py-2 rounded-lg font-semibold hover:bg-amber-700 transition">
          মেসেজ পাঠান
        </button>
      </form>
    </section>
  );
}
