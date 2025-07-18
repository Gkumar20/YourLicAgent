"use client";

import React, { useState, useEffect } from "react";
import MyInfo from "../components/MyInfo";
import AgentUserCard from "../components/AgentUserCard";

const licPlans = [
  {
    name: "LIC Jeevan Anand",
    status: "Active",
    details: "A popular endowment plan with bonus and life cover.",
  },
  {
    name: "LIC Tech Term",
    status: "Active",
    details: "A pure term plan with flexible premium options.",
  },
  {
    name: "LIC Jeevan Labh",
    status: "Pending",
    details: "Limited premium paying endowment plan.",
  },
];

const agentuser = {
  name: "Priya Sharma",
  contact: "+91 9123456789",
  email: "priya.agent@email.com",
  code: "LIC123456",
  branch: "LIC Main Branch, Delhi",
  isAgent:true
};

const PlanCard = ({ plan, open, onClick }) => (
  <div className="bg-blue-50 rounded-xl shadow-md px-4 py-3 mb-4 transition-all duration-300">
    <div className="flex items-center justify-between cursor-pointer" onClick={onClick}>
      <div className="flex items-center gap-2">
        <span className="text-lg">�</span>
        <span className="font-semibold text-blue-800">{plan.name}</span>
      </div>
      <span className={`text-xs font-bold ${plan.status === "Active" ? "text-green-600 animate-pulse" : "text-yellow-600 animate-bounce"}`}>{plan.status}</span>
      <span className="ml-2 text-xl">{open ? "🔽" : "▶️"}</span>
    </div>
    {open && (
      <div className="mt-3 text-gray-700 animate-fade-in-down">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-base">ℹ️</span>
          <span>{plan.details}</span>
        </div>
        {/* Add more plan details here as needed */}
      </div>
    )}
  </div>
);




const ClientProfile = () => {
  const [openPlan, setOpenPlan] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch user by id from localStorage
  useEffect(() => {
    const userId = typeof window !== "undefined" ? localStorage.getItem("userId") : null;
    if (!userId) {
      setError("User ID not found in localStorage");
      setLoading(false);
      return;
    }
    setLoading(true);
    fetch(`/api/user/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.user) setUser(data.user);
        else setError(data.error || "User not found");
      })
      .catch((err) => setError(err.message || "Error fetching user"))
      .finally(() => setLoading(false));
  }, []);

  // Update user info after edit
  const handleUserUpdate = (updated) => {
    if (updated) setUser(updated);
  };

  return (
    <div className="py-6 px-2 sm:px-8 flex flex-col md:flex-row md:items-start md:justify-center gap-8">
      {/* Left: MyInfo */}
      <div className="w-full md:w-1/2 lg:w-4/6 flex-shrink-0">
        {loading ? (
          <div className="text-center text-blue-700 font-semibold">Loading profile...</div>
        ) : error ? (
          <div className="text-center text-red-600 font-semibold">{error}</div>
        ) : user ? (
          <MyInfo user={user} onUserUpdate={handleUserUpdate} />
        ) : null}
      </div>

      {/* Right: Agent & Plans */}
      <div className="w-full md:w-1/2 lg:w-2/6 flex flex-col gap-6">
        {/* Agent Card */}
        <AgentUserCard agentuser={agentuser} />

        {/* Plans Section */}
        <div className="bg-white/80 rounded-2xl shadow-lg p-6 border border-blue-100 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl animate-pulse">📃</span>
            <h3 className="text-xl font-bold text-blue-700">My LIC Plans</h3>
          </div>
          <div>
            {licPlans.map((plan, idx) => (
              <PlanCard
                key={idx}
                plan={plan}
                open={openPlan === idx}
                onClick={() => setOpenPlan(openPlan === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;