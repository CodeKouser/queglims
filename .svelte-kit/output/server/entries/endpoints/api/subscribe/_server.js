import { json } from "@sveltejs/kit";
import { MongoClient } from "mongodb";
const uri = process.env.MONGO_URI;
if (!uri) {
  throw new Error(
    "MONGO_URI is not defined. Please set it in your environment variables."
  );
}
const client$1 = new MongoClient(uri);
const databasePromise = client$1.connect();
const client = await databasePromise;
async function POST({ request }) {
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
      signedUpAt: /* @__PURE__ */ new Date()
    });
    console.log(`Successfully inserted user with _id: ${result.insertedId}`);
    return json({
      success: true,
      message: "Thanks for your interest! We'll be in touch soon."
    });
  } catch (error) {
    console.error("Database operation failed:", error);
    return json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
export {
  POST
};
