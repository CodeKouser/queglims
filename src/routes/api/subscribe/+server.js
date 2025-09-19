import { json } from "@sveltejs/kit";
import databasePromise from "$lib/server/db.js";

// Await the single database connection promise.
const client = await databasePromise;

export async function POST({ request }) {
  const { email } = await request.json();

  if (!email) {
    return json(
      { success: false, message: "Email is required" },
      { status: 400 }
    );
  }

  try {
    const database = client.db("queglims_db");
    const collection = database.collection("beta_signup_email");

    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      return json(
        { success: false, message: "You have already signed up" },
        { status: 409 }
      );
    }

    const result = await collection.insertOne({
      email,
      signedUpAt: new Date(),
    });
    console.log(`Successfully inserted user with _id: ${result.insertedId}`);

    return json({
      success: true,
      message: "Thanks for your interest! We'll be in touch soon.",
    });
  } catch (error) {
    console.error("Database operation failed:", error);
    return json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
