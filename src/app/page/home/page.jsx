"use client";
import React from "react";
import Image from "next/image";
import Footer from "@/app/components/Footer";

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
  "Sapna Kumari", "Priya Singh", "Rahul Verma"
];
const clients = [
  "Ramesh Kumar", "Sanjay Singh", "Meena Gupta",
];
const cities = [
  { name: "Mumbai", emoji: "🌆", desc: "Financial Hub" },
  { name: "Delhi", emoji: "🏛️", desc: "Capital City" },
  { name: "Bangalore", emoji: "💻", desc: "Tech City" },
  { name: "Kolkata", emoji: "🛶", desc: "Cultural Hub" },
  { name: "Patna", emoji: "🏛️", desc: "Capital City" },
  { name: "Lucknow", emoji: "💻", desc: "Tech City" },
  { name: "Bhubaneswar", emoji: "🛶", desc: "Cultural Hub" },
];
const news = [
  {
    title: "LIC Launches New Plan for Youth",
    emoji: "🧑‍💼",
    time: "1 hour ago",
    desc: "The Jeevan Udaan plan aims to provide maximum returns with minimal premium for youth under 25.",
  },
  {
    title: "Policy Bonus Increased by 2%",
    emoji: "📈",
    time: "3 hours ago",
    desc: "LIC declared an increase in annual policyholder bonus, affecting all endowment plans from April 2025.",
  },
  {
    title: "New Tax Benefits Introduced",
    emoji: "💰",
    time: "Today",
    desc: "LIC policies under Section 80C and 10(10D) now include an extra tax rebate slab for salaried individuals.",
  },
];



const Home = () => {
  return (
    <main className="bg-gradient-to-b from-blue-50 to-white min-h-screen flex flex-col items-center">
      {/* Hero Section - Enhanced with Animations and Style */}
      <section className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-16  bg-gradient-to-br from-white via-blue-50 to-purple-100 dark:from-gray-900 dark:via-slate-800 dark:to-black animate-fade-in-up rounded-xl shadow-lg">

        {/* Left: Branding & Text */}
        <div className="flex-1 flex flex-col justify-center items-start gap-4 max-w-2xl w-full">

          {/* Logo and Name */}
          <div className="flex items-center gap-3">
            <Image src="/myageny_logo.png" alt="Myageny Logo" width={56} height={56} className="rounded-full shadow-md animate-bounce" />
            <Image src="/myageny_name.png" alt="Myageny Name" width={200} height={56} className="object-contain" />
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-700 dark:text-blue-300 tracking-tight leading-tight">
            🤝 Connecting LIC Agents & Clients with Trust & Transparency
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Boost your LIC journey with seamless communication between agents and clients. Built for performance, trust, and user-friendliness.
          </p>
          <p className="text-md sm:text-lg text-blue-800 dark:text-blue-400 font-medium italic">
            हमारी कंपनी एलआईसी से जुड़े एजेंटों और ग्राहकों के बीच निर्बाध संचार प्रदान करती है, जिससे विश्वास, पारदर्शिता और सुविधा सुनिश्चित होती है।
          </p>

          {/* Key Info Highlights */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="flex items-center gap-2 text-sm sm:text-base text-green-700 dark:text-green-300">
              ✅ Instant Client Queries
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-base text-purple-700 dark:text-purple-300">
              🔒 Secure Agent Login
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-base text-indigo-700 dark:text-indigo-300">
              📱 Mobile Friendly
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-base text-pink-700 dark:text-pink-300">
              🌐 Multilingual Support
            </div>
          </div>
        </div>

        {/* Right: Image (Hidden on mobile) */}
        <div className="flex-1 hidden md:flex justify-center items-center mt-8 md:mt-0 animate-slide-in-left">
          <Image
            src="/myageny_img.png"
            alt="Myageny Hero"
            width={400}
            height={400}
            className="rounded-3xl shadow-2xl object-contain hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
      </section>


      {/* Our Services Section */}
      <section className="w-full py-6 sm:py-8 bg-gradient-to-r from-yellow-100 to-yellow-50">
        <h2 className="text-2xl font-bold mb-6 text-center">💼 Our Services</h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 px-4 sm:px-8">

          {/* Card 1: Chat with Agents */}
          <div className="flex-1 bg-white rounded-xl shadow-md border border-yellow-300 p-5 flex flex-col justify-between hover:shadow-xl transition duration-300">
            <div className="text-4xl mb-3 text-center animate-pulse">💬</div>
            <h3 className="text-lg sm:text-xl font-semibold text-center mb-2">Talk with Agents</h3>
            <p className="text-gray-600 text-sm text-center mb-4">
              Instantly connect with LIC agents and get all your queries resolved in real-time.
            </p>
            <button className="bg-yellow-400 text-white font-medium py-2 px-4 rounded hover:bg-yellow-500 transition mx-auto">
              Start Chat
            </button>
          </div>

          {/* Card 2: Complete Profile */}
          <div className="flex-1 bg-white rounded-xl shadow-md border border-yellow-300 p-5 flex flex-col justify-between hover:shadow-xl transition duration-300">
            <div className="text-4xl mb-3 text-center">📋</div>
            <h3 className="text-lg sm:text-xl font-semibold text-center mb-2">Complete Your Profile</h3>
            <p className="text-gray-600 text-sm text-center mb-4">
              Profile Completion: <span className="font-bold text-yellow-600">60%</span> done.<br />
              Complete your details to unlock personalized features.
            </p>
            <button className="bg-yellow-400 text-white font-medium py-2 px-4 rounded hover:bg-yellow-500 transition mx-auto">
              Complete Now
            </button>
          </div>

          {/* Card 3: Apply for Agent */}
          <div className="flex-1 bg-white rounded-xl shadow-md border border-yellow-300 p-5 flex flex-col justify-between hover:shadow-xl transition duration-300">
            <div className="text-4xl mb-3 text-center">🧑‍💼</div>
            <h3 className="text-lg sm:text-xl font-semibold text-center mb-2">Apply for Agent</h3>
            <p className="text-gray-600 text-sm text-center mb-4">
              Are you an LIC Agent? Join our platform and expand your reach to more customers.
            </p>
            <button className="bg-yellow-400 text-white font-medium py-2 px-4 rounded hover:bg-yellow-500 transition mx-auto">
              Apply Now
            </button>
          </div>

        </div>
      </section>


      {/* LIC Plans Section with Fixed Top Plans + Auto-scroll All Plans */}
      <section className="w-full py-6 sm:py-8 bg-gradient-to-r from-blue-100 to-blue-50">
        <h2 className="text-2xl font-bold mb-4 text-center">🌟 Our LIC Plans</h2>

        {/* Top 3 Featured Plans - Fixed Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8 px-4">
          {licPlans.slice(0, 3).map((plan, idx) => (
            <div
              key={idx}
              className="w-full sm:w-1/3 bg-white shadow-lg rounded-xl p-4 sm:p-6 flex flex-col items-center border border-blue-200 hover:scale-105 transition-transform duration-300"
            >
              <span className="text-3xl sm:text-4xl mb-2 animate-bounce">{plan.emoji}</span>
              <h3 className="font-bold text-base sm:text-lg mb-1">{plan.name}</h3>
              <p className="text-gray-600 text-xs sm:text-sm text-center">{plan.desc}</p>
            </div>
          ))}
        </div>

        {/* All Plans - Auto-scroll Section */}
        <div className="relative w-full overflow-x-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100">
          <div className="flex w-max animate-scroll-x gap-4 sm:gap-6 min-w-full">
            {licPlans.concat(licPlans).map((plan, idx) => (
              <div
                key={idx}
                className="min-w-[180px] sm:min-w-[250px] bg-white shadow-lg rounded-xl p-4 sm:p-6 flex flex-col items-center border border-blue-200 hover:scale-105 transition-transform duration-300"
              >
                <span className="text-3xl sm:text-4xl mb-2 animate-bounce">{plan.emoji}</span>
                <h3 className="font-bold text-base sm:text-lg mb-1">{plan.name}</h3>
                <p className="text-gray-600 text-xs sm:text-sm text-center">{plan.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Auto-scroll Keyframes */}
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


      {/* Top Agents & Clients - Unified Section */}
      <section className="w-full py-8 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-inner">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-blue-800 dark:text-blue-300">
          🌟 Top 10 Agents & Clients in India
        </h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Agents List */}
          <div className="flex-1 bg-yellow-50 dark:bg-yellow-900 p-4 sm:p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-yellow-700 dark:text-yellow-300 mb-4 text-center">🏅 Top Agents</h3>
            <ul className="space-y-4">
              {agents.map((agent, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-4 p-3 sm:p-4 bg-white dark:bg-yellow-800 rounded-lg border border-yellow-200 dark:border-yellow-700 shadow-sm hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-300 text-white font-bold text-lg shadow-md animate-rank-pulse">
                    #{idx + 1}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white">🧑‍💼 {agent}</span>
                    <span className="text-xs text-gray-500">Top Performing Agent</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Clients List */}
          <div className="flex-1 bg-green-50 dark:bg-green-900 p-4 sm:p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-4 text-center">👑 Top Clients</h3>
            <ul className="space-y-4">
              {clients.map((client, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-4 p-3 sm:p-4 bg-white dark:bg-green-800 rounded-lg border border-green-200 dark:border-green-700 shadow-sm hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-400 text-white font-bold text-lg shadow-md animate-rank-pulse">
                    #{idx + 1}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white">🧑‍🤝‍🧑 {client}</span>
                    <span className="text-xs text-gray-500">Premium LIC Client</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <style jsx>{`
    @keyframes rank-pulse {
      0%, 100% {
        transform: scale(1);
        background-color: inherit;
      }
      50% {
        transform: scale(1.1);
        background-color: #facc15;
      }
    }
    .animate-rank-pulse {
      animation: rank-pulse 2s infinite ease-in-out;
    }
  `}</style>
      </section>


      {/* Services Section (Cities Showcase) */}
      <section className="w-full py-8">
        <h2 className="text-2xl font-bold mb-6 text-center">🗺️ Our Services in India</h2>

        {/* Top Fixed Cities - like Our Plans section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-4 sm:px-12 mb-8">
          {cities.slice(0, 4).map((city, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center bg-blue-100 rounded-xl p-4 shadow-md hover:bg-blue-200 transition-colors"
            >
              <span className="text-4xl mb-2">{city.emoji}</span>
              <span className="text-lg font-semibold">{city.name}</span>
              <span className="text-xs text-blue-900">{city.desc}</span>
            </div>
          ))}
        </div>

        {/* Auto-scroll cities horizontally */}
        <div className="overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100 px-2">
          <div className="flex gap-4 justify-center items-center ">
            {cities.map((city, idx) => (
              <div
                key={idx}
                className="min-w-[120px] bg-blue-200 rounded-full text-blue-900 px-4 py-2 font-medium text-center text-sm flex items-center justify-center gap-2 shadow hover:bg-blue-300 transition-colors"
              >
                <span>{city.emoji}</span>
                <span>{city.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="w-full py-8 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">📰 Latest Updates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-blue-200 shadow-sm p-5 hover:shadow-md hover:scale-[1.01] transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-3xl">{item.emoji}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.time}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Footer Section */}
      <Footer />
    </main>
  );
};

export default Home;