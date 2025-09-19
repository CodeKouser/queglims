import { MongoClient } from "mongodb";
const uri = process.env.MONGO_URI; // This is the correct way

// This creates a single MongoClient instance that will be reused.
const client = new MongoClient(uri);

// Export the connected client instance.
export default client.connect();
