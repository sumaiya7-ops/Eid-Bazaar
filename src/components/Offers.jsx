export default function Offers() {
  return (
    <section id="offers" className="bg-amber-100 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-amber-900 mb-4">🔥 ধামাকা ঈদ অফার!</h2>
        <p className="text-gray-700 mb-8">নির্দিষ্ট মসলা কম্বো প্যাকেজে পাচ্ছেন ২০% পর্যন্ত নিশ্চিত ছাড়।</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow border-l-4 border-red-500 text-left">
            <span className="bg-red-100 text-red-600 font-bold text-xs px-2 py-1 rounded">মেগা সেভ</span>
            <h4 className="font-bold text-lg text-gray-800 mt-2">কোরবানি কম্বো প্যাক (৫টি মশলা)</h4>
            <p className="text-amber-600 font-bold mt-2"><span className="line-through text-gray-400 font-normal">৳৬৫০</span> ৳৪৯৯</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border-l-4 border-red-500 text-left">
            <span className="bg-red-100 text-red-600 font-bold text-xs px-2 py-1 rounded">সীমিত অফার</span>
            <h4 className="font-bold text-lg text-gray-800 mt-2">পোলাও ও বিরিয়ানি কিট</h4>
            <p className="text-amber-600 font-bold mt-2"><span className="line-through text-gray-400 font-normal">৳৪০০</span> ৳৩২০</p>
          </div>
        </div>
      </div>
    </section>
  );
}
