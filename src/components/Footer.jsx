export default function Footer() {
  return (
    <footer className="bg-amber-950 text-amber-100 py-8 px-6 text-center border-t border-amber-900">
      <div className="max-w-4xl mx-auto space-y-3">
        <h3 className="text-xl font-bold text-amber-400">ঈদ বাজার</h3>
        <p className="text-sm text-amber-200/80">নিরাপদ ও খাঁটি পণ্যের বিশ্বস্ত প্রতিষ্ঠান। আপনার ঈদ হোক আনন্দময় ও সুস্বাদু।</p>
        <p className="text-xs text-amber-300/60 pt-4">© {new Date().getFullYear()} ঈদ বাজার। অল রাইটস রিজার্ভড। ডেভলপড বাই আপনার নাম।</p>
      </div>
    </footer>
  );
}
