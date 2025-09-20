import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;


if (!uri) {
  throw new Error("MONGO_URI is not defined. Please set it in your environment variables.");
}

const client = new MongoClient(uri);

// Export the connected client instance
export default client.connect();
