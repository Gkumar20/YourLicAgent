import dbConnect from '@/utils/db';
import User from '@/models/User';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req) {
	try {
		await dbConnect();
		const { username, password } = await req.json();
		if (!username || !password) {
			return NextResponse.json({ error: 'Missing credentials' }, { status: 400 });
		}
		// Find user by email or mobile
		const user = await User.findOne({ $or: [ { email: username }, { mobile: username } ] });
		if (!user) {
			return NextResponse.json({ error: 'User not found' }, { status: 404 });
		}
		// Compare password
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
		}
		// Sign JWT with user id only
		const token = jwt.sign(
			{ userId: user._id },
			process.env.JWT_SECRET,
			{ expiresIn: '7d' }
		);
		// Success: only return userId and token
		return NextResponse.json({ message: 'Login successful', token, userId: user._id }, { status: 200 });
	} catch (err) {
		return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
	}
}
