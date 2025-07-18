import dbConnect from '@/utils/db';
import User from '@/models/User';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await dbConnect();
    const users = await User.find({}, '-password'); // Exclude password
    return NextResponse.json({ users }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}
