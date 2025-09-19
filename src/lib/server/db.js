import { MongoClient } from "mongodb";
import { PRIVATE_MONGO_URI } from "process.env.MONGO_URI";

// This creates a single MongoClient instance that will be reused.
const client = new MongoClient(PRIVATE_MONGO_URI);

// Export the connected client instance.
export default client.connect();
