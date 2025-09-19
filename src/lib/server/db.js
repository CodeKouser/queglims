import { MongoClient } from "mongodb";
import { PRIVATE_MONGO_URI } from "$env/static/private";

// This creates a single MongoClient instance that will be reused.
const client = new MongoClient(PRIVATE_MONGO_URI);

// Export the connected client instance.
export default client.connect();
