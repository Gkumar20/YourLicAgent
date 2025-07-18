"use client";
import React, { useState, useEffect } from "react";
import MyInfo from "../components/MyInfo";

const agentuser = {
  name: "Priya Sharma",
  contact: "+91 9123456789",
  email: "priya.agent@email.com",
  code: "LIC123456",
  branch: "LIC Main Branch, Delhi",
  isAgent: true,
};

const plans = [
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

const clients = [
  {
    name: "Ganesh Kumar",
    email: "learninganesh@gmail.com",
    mobile: "7322902755",
    plan: "LIC Jeevan Anand",
  },
  {
    name: "Rohit Singh",
    email: "rohit@email.com",
    mobile: "9876543210",
    plan: "LIC Tech Term",
  },
  {
    name: "Priya Patel",
    email: "priya@email.com",
    mobile: "9123456789",
    plan: "LIC Jeevan Labh",
  },
];

const PlanCard = ({ plan, open, onClick }) => (
  <div className="bg-pink-50 rounded-xl shadow-md px-4 py-3 mb-4 transition-all duration-300">
    <div className="flex items-center justify-between cursor-pointer" onClick={onClick}>
      <div className="flex items-center gap-2">
        <span className="text-lg">📃</span>
        <span className="font-semibold text-pink-800">{plan.name}</span>
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
      </div>
    )}
  </div>
);

const ClientTable = ({ clients }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="w-full">
      {/* Desktop View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border border-pink-200 rounded-xl shadow bg-white">
          <thead className="bg-pink-100">
            <tr>
              <th className="px-4 py-2 text-left text-pink-800 font-bold">Name</th>
              <th className="px-4 py-2 text-left text-pink-800 font-bold">Email</th>
              <th className="px-4 py-2 text-left text-pink-800 font-bold">Mobile</th>
              <th className="px-4 py-2 text-left text-pink-800 font-bold">Plan</th>
              <th className="px-4 py-2 text-center text-pink-800 font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, idx) => (
              <tr key={idx} className="hover:bg-pink-50 transition">
                <td className="px-4 py-2 font-semibold text-pink-700">{client.name}</td>
                <td className="px-4 py-2">{client.email}</td>
                <td className="px-4 py-2">{client.mobile}</td>
                <td className="px-4 py-2">{client.plan}</td>
                <td className="px-4 py-2 text-center">
                  <button className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded-lg shadow transition-all text-sm font-bold flex items-center gap-1 mx-auto">
                    <span>💬</span> Talk
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden space-y-4">
        {clients.map((client, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-4 shadow border border-pink-100"
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold text-pink-800">{client.name}</span>
              <button
                className="text-sm bg-pink-500 text-white px-3 py-1 rounded shadow hover:bg-pink-600"
              >
                💬 Talk
              </button>
            </div>
            <button
              onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
              className="mt-2 text-xs text-pink-600 underline"
            >
              {expandedIndex === idx ? "Hide Details" : "Show Details"}
            </button>
            {expandedIndex === idx && (
              <div className="mt-2 text-sm text-gray-600 space-y-1 animate-fade-in-down">
                <div>📧 <b>Email:</b> {client.email}</div>
                <div>📞 <b>Mobile:</b> {client.mobile}</div>
                <div>📝 <b>Plan:</b> {client.plan}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// User info state and fetch logic (like user profile)
const useUserInfo = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  const handleUserUpdate = (updated) => {
    if (updated) setUser(updated);
  };

  return { user, loading, error, handleUserUpdate };
};

const AgentProfile = () => {
  const [openPlan, setOpenPlan] = useState(null);
  const { user, loading, error, handleUserUpdate } = useUserInfo();

  return (
    <div className="py-6 px-2 sm:px-6 lg:px-10 space-y-8">
      {/* MyInfo + MyPlans - side by side in desktop */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-3/4">
          {/* Show user info and update, fallback to agentuser if not loaded */}
          {loading ? (
            <div className="text-center text-blue-700 font-semibold">Loading profile...</div>
          ) : error ? (
            <div className="text-center text-red-600 font-semibold">{error}</div>
          ) : user ? (
            <MyInfo user={user} onUserUpdate={handleUserUpdate} />
          ) : (
            <MyInfo user={agentuser} />
          )}
        </div>
        <div className="lg:w-1/4 bg-white/80 rounded-2xl shadow-lg p-6 border border-pink-100">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl animate-bounce">📃</span>
            <h3 className="text-xl font-bold text-pink-700">My Plans</h3>
          </div>
          {plans.map((plan, idx) => (
            <PlanCard
              key={idx}
              plan={plan}
              open={openPlan === idx}
              onClick={() => setOpenPlan(openPlan === idx ? null : idx)}
            />
          ))}
        </div>
      </div>

      {/* Clients - full width below */}
      <div className="bg-white/80 rounded-2xl shadow-lg p-6 border border-pink-100">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl animate-pulse">🧑‍🤝‍🧑</span>
          <h3 className="text-xl font-bold text-pink-700">All Clients</h3>
          <span className="ml-auto text-xs text-pink-600">{clients.length} clients</span>
        </div>
        <ClientTable clients={clients} />
      </div>
    </div>
  );
};

export default AgentProfile;
