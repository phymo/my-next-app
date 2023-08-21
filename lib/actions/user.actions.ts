"use server";

import User from '../models/user.model';
import { connectToDB } from '../mongoose';

export async function fetchUser(userId: string) {
  try {
    connectToDB();
    const user = await User.findOne({ id: userId });
    return user;
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

interface userParams {
  userId: string;
  username: string;
  name: string;
  image: string;
  bio: string;
}

export async function updateUser({
  userId,
  username,
  name,
  image,
  bio,
}: userParams) {
  try {
    connectToDB();
    return await User.findOneAndUpdate({ id: userId }, {
      username: username,
      name: name,
      image: image,
      bio: bio,
    }, { upsert: true });
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}
