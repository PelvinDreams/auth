import mongoose from 'mongoose';
// import { buffer } from 'stream/consumers';

const MONGODB_URI = process.env.MONGODB;

if(!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// this function will return a promise
async function connectToDatabase() {
    if(mongoose.connection.readyState == 1) {
        return mongoose;
    }
    const opts = {
        bufferCommands: false,
    }
    // if not connected, we establish a connection
    await mongoose.connect(MONGODB_URI, opts);
    return mongoose;
}

export default connectToDatabase;