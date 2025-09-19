import { MongoClient } from "mongodb";
const uri = process.env.MONGO_URI; // This is the correct way

// This creates a single MongoClient instance that will be reused.
const client = new MongoClient(uri);

if (!uri) {
  throw new Error(
    "MONGO_URI is not defined. Please set it in your environment variables."
  );
}

// Export the connected client instance.
export default client.connect();
