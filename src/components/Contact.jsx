export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
    >
      {/* LEFT SIDE */}
      <div>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Get In Touch
        </h2>

        <p className="text-gray-600 mb-8">
          Have any questions or want to place an order? Feel free to contact us anytime.
        </p>

        <div className="space-y-4 text-gray-700 font-medium">

          <p>
            📧 Email:{" "}
            <a
              href="mailto:sumaiyakookie307@gmail.com"
              className="text-amber-600 hover:underline"
            >
              sumaiyakookie307@gmail.com
            </a>
          </p>

          <p>
            🔗 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/sumaiya-sorhad"
              target="_blank"
              className="text-amber-600 hover:underline"
            >
              View Profile
            </a>
          </p>

          <p>
            📞 Phone:{" "}
            <span className="text-amber-600">
              +880 1826459605
            </span>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-5 hover:shadow-2xl transition"
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Send a Message
        </h3>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Your Name
          </label>

          <input
            type="text"
            required
            placeholder="Enter your name"
            className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Message
          </label>

          <textarea
            rows="5"
            required
            placeholder="Write your message..."
            className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:ring-2 focus:ring-amber-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 rounded-xl font-bold hover:scale-105 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}