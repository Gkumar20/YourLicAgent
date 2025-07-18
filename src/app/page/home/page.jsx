import React from "react";
import Image from "next/image";

const licPlans = [
  { name: "Jeevan Anand", desc: "Best for lifelong protection", emoji: "🛡️" },
  { name: "Money Back", desc: "Periodic returns for your needs", emoji: "💸" },
  { name: "Endowment Plan", desc: "Save and grow your wealth", emoji: "📈" },
  { name: "Child Plan", desc: "Secure your child's future", emoji: "👶" },
  { name: "Pension Plan", desc: "Retire with peace of mind", emoji: "👴" },
  { name: "Term Plan", desc: "High cover, low premium", emoji: "📝" },
  { name: "ULIP", desc: "Investment + Insurance", emoji: "💹" },
  { name: "Health Plan", desc: "Health comes first", emoji: "🏥" },
  { name: "Single Premium", desc: "One-time investment", emoji: "💰" },
  { name: "Group Insurance", desc: "For organizations", emoji: "👥" },
];

const agents = [
  "Amit Sharma", "Priya Singh", "Rahul Verma", "Sunita Patel", "Vikas Gupta",
  "Neha Joshi", "Rohit Kumar", "Anjali Mehra", "Suresh Yadav", "Pooja Rani"
];
const clients = [
  "Ramesh Kumar", "Sanjay Singh", "Meena Gupta", "Deepak Sharma", "Kavita Jain",
  "Arun Mishra", "Seema Agarwal", "Vivek Soni", "Nisha Bansal", "Manoj Tiwari"
];
const cities = [
  "Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad", "Jaipur", "Lucknow"
];
const news = [
  { title: "LIC launches new plan for youth", emoji: "📰" },
  { title: "Record claims settled in 2025", emoji: "🏆" },
  { title: "Digital onboarding for clients", emoji: "💻" },
];
const socials = [
  { name: "Twitter", url: "https://twitter.com/", icon: "🐦" },
  { name: "Facebook", url: "https://facebook.com/", icon: "📘" },
  { name: "Instagram", url: "https://instagram.com/", icon: "📸" },
  { name: "LinkedIn", url: "https://linkedin.com/", icon: "💼" },
];

const Home = () => {
  return (
    <main className="bg-gradient-to-b from-blue-50 to-white min-h-screen flex flex-col items-center">
      {/* Hero Section - Two Columns */}
      <section className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-10 gap-8 animate-fade-in-up">
        {/* Left: Text & Branding */}
        <div className="flex-1 flex flex-col justify-center items-start max-w-xl w-full">
          <div className="mb-4">
            <Image src="/myageny_logo.png" alt="Myageny Logo" width={64} height={64} className="mb-2" />
            <Image src="/myageny_name.png" alt="Myageny Name" width={300} height={80} className="mb-2" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-2">
            🤝 Smooth Communication Between LIC Agents & Clients
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-1">
            Our company provides seamless communication between agents and clients associated with LIC, ensuring trust, transparency, and convenience.
          </p>
          <p className="text-lg md:text-xl text-blue-700 font-semibold">
            हमारी कंपनी एलआईसी से जुड़े एजेंटों और ग्राहकों के बीच निर्बाध संचार प्रदान करती है, जिससे विश्वास, पारदर्शिता और सुविधा सुनिश्चित होती है।
          </p>
        </div>
        {/* Right: Big Image */}
        <div className="flex-1 flex justify-center items-center w-full">
          <Image src="/myageny_img.png" alt="Myageny Hero" width={400} height={400} className="rounded-2xl shadow-2xl object-contain" />
        </div>
      </section>

      {/* LIC Plans Auto-scroll Section */}
      <section className="w-full py-8 bg-gradient-to-r from-blue-100 to-blue-50">
        <h2 className="text-2xl font-bold mb-4 text-center">🌟 Our LIC Plans</h2>
        <div className="relative w-full overflow-x-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100">
          <div className="flex w-max animate-scroll-x gap-6 min-w-full">
            {licPlans.concat(licPlans).map((plan, idx) => (
              <div
                key={idx}
                className="min-w-[250px] bg-white shadow-lg rounded-xl p-6 flex flex-col items-center border border-blue-200 hover:scale-105 transition-transform duration-300"
              >
                <span className="text-4xl mb-2 animate-bounce">{plan.emoji}</span>
                <h3 className="font-bold text-lg mb-1">{plan.name}</h3>
                <p className="text-gray-600 text-sm text-center">{plan.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes scroll-x {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-x {
            animation: scroll-x 30s linear infinite;
          }
        `}</style>
      </section>

      {/* Top 10 Agents Section */}
      <section className="w-full py-8">
        <h2 className="text-2xl font-bold mb-4 text-center">🏅 Top 10 Agents in India</h2>
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-yellow-300 scrollbar-track-yellow-100">
          <div className="flex gap-6 min-w-full w-max">
            {agents.map((agent, idx) => (
              <div key={idx} className="bg-yellow-100 border border-yellow-300 rounded-lg px-6 py-4 shadow hover:scale-105 transition-transform duration-300 flex flex-col items-center min-w-[200px]">
                <span className="text-3xl mb-1">🧑‍💼</span>
                <span className="font-semibold">{agent}</span>
                <span className="text-xs text-gray-500">Rank #{idx + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top 10 Clients Section */}
      <section className="w-full py-8 bg-blue-50">
        <h2 className="text-2xl font-bold mb-4 text-center">👑 Top 10 Clients in India</h2>
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-green-100">
          <div className="flex gap-6 min-w-full w-max">
            {clients.map((client, idx) => (
              <div key={idx} className="bg-green-100 border border-green-300 rounded-lg px-6 py-4 shadow hover:scale-105 transition-transform duration-300 flex flex-col items-center min-w-[200px]">
                <span className="text-3xl mb-1">🧑‍🤝‍🧑</span>
                <span className="font-semibold">{client}</span>
                <span className="text-xs text-gray-500">Rank #{idx + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section (Map & Cities) */}
      <section className="w-full py-8">
        <h2 className="text-2xl font-bold mb-4 text-center">🗺️ Our Services in India</h2>
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100 mb-4">
          <div className="flex gap-4 min-w-full w-max">
            {cities.map((city, idx) => (
              <span key={idx} className="bg-blue-200 text-blue-900 rounded-full px-4 py-2 font-medium shadow hover:bg-blue-300 transition-colors duration-200 min-w-[120px] text-center">
                {city}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <span className="text-6xl animate-pulse">🗺️</span>
        </div>
      </section>

      {/* News Section */}
      <section className="w-full py-8 bg-blue-50">
        <h2 className="text-2xl font-bold mb-4 text-center">📰 Latest News</h2>
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100">
          <div className="flex gap-6 min-w-full w-max">
            {news.map((item, idx) => (
              <div key={idx} className="bg-white border border-blue-200 rounded-lg px-6 py-4 shadow flex items-center gap-3 hover:scale-105 transition-transform duration-300 min-w-[250px]">
                <span className="text-2xl">{item.emoji}</span>
                <span className="font-medium">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="w-full py-8">
        <h2 className="text-2xl font-bold mb-4 text-center">🌐 Connect with Us</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <svg className="w-10 h-10 text-blue-400 group-hover:scale-125 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.72 0-4.924 2.206-4.924 4.924 0 .386.044.762.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.724-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
            <span className="text-sm mt-1">Twitter</span>
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <svg className="w-10 h-10 text-blue-700 group-hover:scale-125 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            <span className="text-sm mt-1">Facebook</span>
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <svg className="w-10 h-10 text-pink-500 group-hover:scale-125 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406c-.98.98-1.274 2.092-1.334 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.06 1.282.354 2.394 1.334 3.374.98.98 2.092 1.274 3.374 1.334C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.282-.06 2.394-.354 3.374-1.334.98-.98 1.274-2.092 1.334-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.06-1.282-.354-2.394-1.334-3.374-.98-.98-2.092-1.274-3.374-1.334C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            <span className="text-sm mt-1">Instagram</span>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <svg className="w-10 h-10 text-blue-600 group-hover:scale-125 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.37-1.849 3.602 0 4.267 2.368 4.267 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z"/></svg>
            <span className="text-sm mt-1">LinkedIn</span>
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full py-10 bg-gray-100 text-gray-700 text-center mt-8 border-t border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <Image src="/myageny_logo.png" alt="Myageny Logo" width={48} height={48} className="mb-2" />
            <span className="font-bold text-lg mb-1">myageny.com</span>
            <span className="text-sm">Your trusted LIC partner for agents & clients</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold mb-2">Quick Links</span>
            <a href="#" className="text-blue-600 hover:underline">Home</a>
            <a href="#" className="text-blue-600 hover:underline">Plans</a>
            <a href="#" className="text-blue-600 hover:underline">Agents</a>
            <a href="#" className="text-blue-600 hover:underline">Clients</a>
            <a href="#" className="text-blue-600 hover:underline">Contact</a>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold mb-2">Connect</span>
            <div className="flex gap-4 mb-2">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-200" title="Twitter">
                <svg className="w-7 h-7 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.72 0-4.924 2.206-4.924 4.924 0 .386.044.762.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.724-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-200" title="Facebook">
                <svg className="w-7 h-7 text-blue-700" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-200" title="Instagram">
                <svg className="w-7 h-7 text-pink-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406c-.98.98-1.274 2.092-1.334 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.06 1.282.354 2.394 1.334 3.374.98.98 2.092 1.274 3.374 1.334C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.282-.06 2.394-.354 3.374-1.334.98-.98 1.274-2.092 1.334-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.06-1.282-.354-2.394-1.334-3.374-.98-.98-2.092-1.274-3.374-1.334C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-200" title="LinkedIn">
                <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.37-1.849 3.602 0 4.267 2.368 4.267 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z"/></svg>
              </a>
            </div>
            <span className="text-xs text-gray-500">Share your LIC journey with us on social media!</span>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500">&copy; {new Date().getFullYear()} myageny.com | All rights reserved | Designed with ❤️ for LIC agents & clients</div>
      </footer>
    </main>
  );
};

export default Home;