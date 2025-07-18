import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  // Basic Info
  name: { type: String },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  password: { type: String, required: true },
  gender: { type: String },
  dob: { type: Date },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  pincode: { type: String },
  // Identification
  pan: { type: String },
  aadhar: { type: String },
  nominee: { type: String },
  maritalStatus: { type: String },
  occupation: { type: String },
  // Agent Info
  isAgent: { type: Boolean, default: false },
  agentCode: { type: String },
  branch: { type: String },
  agentEmail: { type: String },
  agentMobile: { type: String },
  // Admin
  isAdmin: { type: Boolean, default: false },
  // Plans (array of plan objects for future)
  plans: [
    {
      planName: String,
      status: String,
      details: String,
      startDate: Date,
      endDate: Date,
      premium: Number,
      sumAssured: Number,
      nominee: String,
    }
  ],
  // Timestamps
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model('User', userSchema);
