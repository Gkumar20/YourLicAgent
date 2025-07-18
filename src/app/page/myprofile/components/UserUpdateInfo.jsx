'use client';
import React, { useState } from 'react';

const UserUpdateInfo = ({ user, onUpdate }) => {
  const [form, setForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    mobile: user?.mobile || '',
    address: user?.address || '',
    dob: user?.dob || '',
    gender: user?.gender || '',
    pan: user?.pan || '',
    aadhar: user?.aadhar || '',
    nominee: user?.nominee || '',
    maritalStatus: user?.maritalStatus || '',
    occupation: user?.occupation || '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/user/${user._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Update failed');
      onUpdate && onUpdate(data.user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 animate-[fadeIn_0.3s_ease-in-out] overflow-y-auto max-h-[95vh] relative"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 text-center">
          🧾 Update Your Profile
        </h2>

        <div className="space-y-4">
          {[
            { label: '👤 Name', name: 'name', type: 'text', placeholder: 'Your full name' },
            { label: '📧 Email', name: 'email', type: 'email', placeholder: 'you@email.com' },
            { label: '📱 Mobile', name: 'mobile', type: 'tel', placeholder: '10-digit number' },
            { label: '🏠 Address', name: 'address', type: 'text', placeholder: 'Street, City, State' },
            { label: '🎂 Date of Birth', name: 'dob', type: 'date' },
            {
              label: '⚧️ Gender',
              name: 'gender',
              type: 'select',
              options: ['Male', 'Female', 'Other'],
            },
            { label: '🪪 PAN', name: 'pan', type: 'text', placeholder: 'ABCDE1234F' },
            { label: '🆔 Aadhar', name: 'aadhar', type: 'text', placeholder: '12-digit number' },
            { label: '👥 Nominee', name: 'nominee', type: 'text', placeholder: 'Nominee full name' },
            {
              label: '💍 Marital Status',
              name: 'maritalStatus',
              type: 'select',
              options: ['Single', 'Married', 'Divorced', 'Widowed'],
            },
            { label: '💼 Occupation', name: 'occupation', type: 'text', placeholder: 'Your job' },
          ].map((field, idx) => (
            <div key={idx}>
              <label className="block font-semibold text-gray-700 mb-1">{field.label}</label>
              {field.type === 'select' ? (
                <select
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                >
                  <option value="">Select</option>
                  {field.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={
                    field.name === 'dob' ? form.dob?.slice(0, 10) || '' : form[field.name]
                  }
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  autoComplete="off"
                  className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              )}
            </div>
          ))}
        </div>

        {error && (
          <p className="text-red-600 mt-4 text-center text-sm font-medium">{error}</p>
        )}

        <div className="flex justify-between items-center mt-6 gap-4">
          <button
            type="button"
            className="flex-1 py-2 rounded-xl bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
            onClick={() => onUpdate && onUpdate(null)}
          >
            ❌ Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="flex-1 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition font-semibold"
          >
            {loading ? 'Updating...' : '✅ Save'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserUpdateInfo;
