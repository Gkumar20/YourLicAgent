import dbConnect from '@/utils/db';
import User from '@/models/User';
import { NextResponse } from 'next/server';


export async function GET(req, context) {
  try {
    await dbConnect();
    const { id } = await context.params;
    const user = await User.findById(id, '-password');
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });
    return NextResponse.json({ user }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}


export async function DELETE(req, context) {
  try {
    await dbConnect();
    const { id } = await context.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });
    return NextResponse.json({ message: 'User deleted successfully' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}



export async function PUT(req, context) {
  try {
    await dbConnect();
    const { id } = await context.params;
    const body = await req.json();
    if (body.password) delete body.password; // Prevent password update here

  // Allow updating any field sent in the request body (except password)
  const updateData = { ...body };
  console.log("[PUT /api/user/[id]] updateData:", updateData);

  const user = await User.findByIdAndUpdate(id, updateData, { new: true, runValidators: true, select: '-password' });
  console.log("[PUT /api/user/[id]] updated user:", user);
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });
  return NextResponse.json({ user }, { status: 200 });
  } catch (err) {
    console.error("[PUT /api/user/[id]] error:", err);
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}
