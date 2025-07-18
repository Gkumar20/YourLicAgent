'use client';
import { useState } from 'react';
import { usePathname,useRouter } from 'next/navigation';
import PopupMessage from '@/app/components/PopupMessage';

export default function SignupPage() {
  const pathname = usePathname();
  const isForgot = pathname.includes('/forgotpass');
  const route = useRouter();

  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const generateStrongPassword = () => {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const digits = '0123456789';
    const symbols = '!@#$%^&*()_+';
    const all = upper + lower + digits + symbols;

    const pick = (str) => str[Math.floor(Math.random() * str.length)];

    let generated = [
      pick(upper),
      pick(lower),
      pick(digits),
      pick(symbols),
    ];

    for (let i = 4; i < 10; i++) {
      generated.push(pick(all));
    }

    const shuffled = generated.sort(() => Math.random() - 0.5).join('');
    setPassword(shuffled);
    setConfirmPassword(shuffled);
  };

  const validatePassword = (pass) => {
    return (
      pass.length >= 8 &&
      /[A-Z]/.test(pass) &&
      /[a-z]/.test(pass) &&
      /[0-9]/.test(pass) &&
      /[^A-Za-z0-9]/.test(pass)
    );
  };

  const [resetSuccess, setResetSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setPopupMessage('Password must be at least 8 characters and include uppercase, lowercase, number, and symbol.');
      setResetSuccess(false);
      setShowPopup(true);
      return;
    }

    if (password !== confirmPassword) {
      setPopupMessage("Passwords don't match.");
      setResetSuccess(false);
      setShowPopup(true);
      return;
    }

    try {
      const res = await fetch('/api/auth/forgotpass', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, mobile, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setPopupMessage('✅ Password reset successful! You can now log in.');
        setResetSuccess(true);
        setEmail('');
        setMobile('');
        setPassword('');
        setConfirmPassword('');
      } else {
        setPopupMessage(data.error || 'Password reset failed.');
        setResetSuccess(false);
      }
    } catch (err) {
      setPopupMessage('Something went wrong. Please try again.');
      setResetSuccess(false);
    }
    setShowPopup(true);
  };

  return (
    <div className="py-10 flex items-center justify-center  px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700">
          {isForgot ? 'Forgot Password' : 'Sign Up'}
        </h2>

        <div>
          <label className="block font-medium text-gray-700">
            Email ID
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter email ID"
          />
        </div>

        
          <div>
            <label className="block font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              pattern="[0-9]{10}"
              maxLength={10}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="10-digit mobile number"
            />
          </div>
        

        <div>
          <label className="block font-medium text-gray-700">Password</label>
          <div className="flex gap-2 items-center">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Strong password"
            />
            <button
              type="button"
              onClick={generateStrongPassword}
              className="text-sm text-blue-500 underline mt-1"
            >
              Auto
            </button>
          </div>
        </div>

        <div>
          <label className="block font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className={`w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring ${
              confirmPassword && password !== confirmPassword
                ? 'ring-red-300'
                : 'ring-blue-200'
            }`}
            placeholder="Re-enter password"
          />
          {confirmPassword &&
            password !== confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                Passwords do not match.
              </p>
            )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {isForgot ? 'Reset Password' : 'Sign Up'}
        </button>
      </form>

      {showPopup && (
        <PopupMessage
          message={popupMessage}
          onClose={() => {
            setShowPopup(false);
            if (resetSuccess) {
              route.push('/page/auth/login');
            }
          }}
        />
      )}
    </div>
  );
}
