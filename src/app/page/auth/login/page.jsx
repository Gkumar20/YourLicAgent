"use client";
import React, { useState } from "react";
import Link from "next/link";
import PopupMessage from "@/app/components/PopupMessage";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginSuccess(false);
    setPopupMessage("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        // Verify JWT (optional, for demo)
        const token = data.token;
        let isValid = false;
        if (token) {
          // Simple decode (not secure, just for demo)
          try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            isValid = payload && payload.userId === data.userId;
          } catch (e) {
            isValid = false;
          }
        }
        if (!isValid) {
          setPopupMessage("Invalid token received. Please try again.");
          setLoginSuccess(false);
        } else {
          setPopupMessage("✅ You have successfully logged in.");
          setLoginSuccess(true);
          // Store only userId in localStorage
          localStorage.setItem("userId", data.userId);
          localStorage.setItem("token", token);
          setFormData({ username: "", password: "" });
        }
      } else {
        setPopupMessage(data.error || "Login failed.");
        setLoginSuccess(false);
      }
    } catch (err) {
      setPopupMessage("Something went wrong. Please try again.");
      setLoginSuccess(false);
    }
    setShowPopup(true);
  };

  return (
    <div className="py-10 flex items-center justify-center  px-4">
      <div className="bg-white w-full max-w-sm rounded-2xl shadow-lg p-6 sm:p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-blue-700">🔐 Welcome Back</h2>
          <p className="text-sm text-gray-500 mt-1">Please login to continue</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Mobile Number or Email ID"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="current-password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Login
          </button>
        </form>

        <div className="text-sm flex justify-between items-center text-gray-600">
          <Link href="/page/auth/signup" className="hover:underline text-blue-600">
            ➕ Create Account
          </Link>
          <Link href="/page/auth/forgotpass" className="hover:underline text-blue-600">
            🔑 Forgot Password?
          </Link>
        </div>
      </div>

      {showPopup && (
        <PopupMessage
          message={popupMessage}
          onClose={() => {
            setShowPopup(false);
            if (loginSuccess) {
              // Force reload so Navbar updates (admin icon, etc)
              window.location.href = '/page/home';
            }
          }}
        />
      )}
    </div>
  );
};

export default Login;
