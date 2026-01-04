import { MonteCarlo } from "next/font/google";
import Image from "next/image";

const monteCarlo = MonteCarlo({
  subsets: ["latin"],
  weight: "400",
});

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* Logo/Icon */}
        <div className="mb-8">
          <div className="inline-block">
            <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center animate-pulse">
              <span className="text-5xl">✨</span>
            </div>
          </div>
        </div>

        {/* Main heading */}
        <h1
          className={`${monteCarlo.className} text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent`}
        >
          Under Maintenance
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
          We're crafting something extraordinary
        </p>

        {/* Description */}
        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
          Our website is currently undergoing maintenance to bring you an even
          more elegant and seamless experience. We'll be back shortly with
          handcrafted refinement.
        </p>

        {/* Status indicator */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 bg-slate-700/50 px-6 py-3 rounded-full border border-slate-600">
            <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
            <span className="text-slate-300">Estimated time: 24-48 hours</span>
          </div>
        </div>

        {/* Contact section */}
        <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/50 rounded-lg p-8 mb-8">
          <p className="text-slate-300 mb-4">Questions? Get in touch with us</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@bespokentalors.com"
              className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Email Us
            </a>
            <a
              href="https://wa.me/yourphonenumber"
              className="px-8 py-3 bg-slate-600 hover:bg-slate-500 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-slate-500 text-sm">
          Thank you for your patience. We appreciate your support.
        </p>
      </div>

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </div>
  );
}
