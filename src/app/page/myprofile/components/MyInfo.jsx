
import React, { useState } from "react";
import UserUpdateInfo from "./UserUpdateInfo";



const MyInfo = ({ user, onUserUpdate }) => {
	const [showModal, setShowModal] = useState(false);
	const [userData, setUserData] = useState(user);

	// Update userData if user prop changes
	React.useEffect(() => {
		setUserData(user);
	}, [user]);

	const handleUpdate = (updated) => {
		if (updated) {
			setUserData(updated);
			onUserUpdate && onUserUpdate(updated);
		}
		setShowModal(false);
	};

	const fields = [
		{ label: "Name", value: userData?.name, icon: "📛" },
		{ label: "Email", value: userData?.email, icon: "📧" },
		{ label: "Mobile", value: userData?.mobile, icon: "📱" },
		{ label: "Address", value: userData?.address, icon: "🏠" },
		{ label: "DOB", value: userData?.dob, icon: "🎂" },
		{ label: "Gender", value: userData?.gender, icon: "🚻" },
		{ label: "PAN", value: userData?.pan, icon: "🆔" },
		{ label: "Aadhar", value: userData?.aadhar, icon: "🔢" },
		{ label: "Nominee", value: userData?.nominee, icon: "👥" },
		{ label: "Marital Status", value: userData?.maritalStatus, icon: "💍" },
		{ label: "Occupation", value: userData?.occupation, icon: "💼" },
		// ...add more fields for future
	];

	return (
		<div className="w-full  bg-white/80 rounded-2xl shadow-xl p-6 mt-4 mb-8 animate-fade-in-down border border-blue-100 overflow-hidden relative">
			<div className="flex items-center gap-4 mb-6">
				<span className="text-4xl animate-bounce">👤</span>
				<h2 className="text-2xl font-bold text-blue-700">My Profile</h2>
				<button
					className="ml-auto bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded transition flex items-center gap-1"
					onClick={() => setShowModal(true)}
				>
					<span className="text-lg">✏️</span>
					<span className="hidden sm:inline">Edit</span>
				</button>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 max-h-[60vh] overflow-y-auto pr-2">
				{fields.map((field, idx) => (
					<div key={idx} className="flex items-center gap-3 bg-blue-50 rounded-lg px-3 py-2 shadow-sm">
						<span className="text-xl">{field.icon}</span>
						<span className="font-semibold text-gray-700 whitespace-nowrap">{field.label}:</span>
						<span className="text-gray-900 truncate">{field.value}</span>
					</div>
				))}
			</div>
			{showModal && (
				<UserUpdateInfo user={userData} onUpdate={handleUpdate} />
			)}
		</div>
	);
};

export default MyInfo;
