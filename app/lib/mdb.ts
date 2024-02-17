import { MongoClient } from 'mongodb';

import { DatabaseError } from '@/app/lib/exceptions';

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;

export async function connectDB() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    return db;
  } catch (error) {
    console.log(error);
    throw new DatabaseError('Unable to connect to database.');
  }
}

export async function getUsers() {
  try {
    const db = await connectDB();
    const users = await db
      .collection('users')
      .find({})
      //.sort({ metacritic: -1 })
      //.limit(10)
      .toArray();

    return users;
  } catch (error: any) {
    console.error(error);
    throw new DatabaseError('Unable to retrieve users: ' + error.message);
  } finally {
    // close db?
  }
}
