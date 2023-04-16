import { NextResponse } from 'next/server';

import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser
} from '../../../prisma/user'

// Get user or users
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
      const user = await getUser(id)
      return NextResponse.json({ user })
    } else {
      const users = await getAllUsers()
      return NextResponse.json({ users })
    }
  }
  catch (error) {
    return new NextResponse(error, { status: 500 })
  }
}

// Create user
export async function POST(request) {
  try {
    const res = await request.json();
    console.log(res.nickname)
    const user = await createUser(res.nickname)
    return NextResponse.json(user)
  }
  catch (error) {
    return new NextResponse(error, { status: 500 })
  }
}