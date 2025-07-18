
import dbConnect from '@/utils/db';
import User from '@/models/User';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { sendEmail } from '@/utils/sendEmail';

export async function POST(req) {
  try {
    await dbConnect();
    const { email, mobile, password } = await req.json();
    if (!email || !mobile || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    // Check if user already exists
    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json({ error: 'User already exists' }, { status: 409 });
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create user
    const user = await User.create({ email, mobile, password: hashedPassword });

    // Send welcome email with profile info
    try {
      await sendEmail({
        to: email,
        subject: 'Welcome to MyLicAgent!',
        text: `Welcome to MyLicAgent!\n\nYour profile information:\nEmail: ${email}\nMobile: ${mobile}\nPassword: ${password}\n\nThank you for joining us!`,
        html: `<h2>Welcome to MyLicAgent!</h2><p>Your profile information:</p><ul><li><b>Email:</b> ${email}</li><li><b>Mobile:</b> ${mobile}</li><li><b>Password:</b> ${password}</li></ul><p>Thank you for joining us!</p>`,
      });
    } catch (e) {
      // Don't block signup if email fails, just log
      console.error('Failed to send welcome email:', e.message);
    }

    return NextResponse.json({ message: 'User created', user: { email: user.email, mobile: user.mobile } }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}
