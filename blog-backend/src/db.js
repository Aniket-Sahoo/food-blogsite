import { MongoClient } from 'mongodb';
import 'dotenv/config';

let db;
function connectToDb(cb) {
    const connectionString = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    console.log(connectionString);
    const client = new MongoClient(connectionString);
    client.connect();
    db = client.db(process.env.MONGO_DBNAME);
    console.log('Connected to database ' + process.env.MONGO_DBNAME);
}


export { db, connectToDb };