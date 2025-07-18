
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
    // Find user by email and mobile
    const user = await User.findOne({ email, mobile });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    // Hash new password
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();

    // Send password reset email with profile info
    try {
      await sendEmail({
        to: email,
        subject: 'Your MyLicAgent Password Has Been Reset',
        text: `Hello,\n\nYour password has been reset.\nProfile information:\nEmail: ${email}\nMobile: ${mobile}\nNew Password: ${password}\n\nIf you did not request this, please contact support.`,
        html: `<h2>Your MyLicAgent Password Has Been Reset</h2><p>Profile information:</p><ul><li><b>Email:</b> ${email}</li><li><b>Mobile:</b> ${mobile}</li><li><b>New Password:</b> ${password}</li></ul><p>If you did not request this, please contact support.</p>`,
      });
    } catch (e) {
      // Don't block reset if email fails, just log
      console.error('Failed to send reset email:', e.message);
    }

    return NextResponse.json({ message: 'Password reset successful' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}
