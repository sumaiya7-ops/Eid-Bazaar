export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-16 px-6 text-center md:text-left flex flex-col md:flex-row items-center justify-around gap-8">
      <div className="max-w-md">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">ঈদ মোবারক! 🎉</h1>
        <p className="text-lg text-amber-100">
          পবিত্র ঈদুল আজহার শুভেচ্ছা। কোরবানির ঈদের সব সেরা মশলা এবং সুস্বাদু খাবারের আইটেম নিয়ে আমরা প্রস্তুত।
        </p>
      </div>
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-amber-400 overflow-hidden shadow-2xl">
        <img src="profile.jpg" alt="Eid Mubarak" className="w-full h-full object-cover" />
      </div>
    </section>
  );
}
