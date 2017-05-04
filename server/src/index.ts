import * as express from 'express';
import * as http from 'http';
const port = process.env.PORT || 3000;

import * as mongo from 'mongodb';
import { Db } from "mongodb";

const URL = 'mongodb://localhost:27017/mydatabase';

const mongoClient = mongo.MongoClient;

const DataBase: Promise<Db> = mongoClient.connect(URL);

async function getFoods() {
    const db: Db = await DataBase;
    const foodsArray = await db.collection('foods').find({}).toArray();
    foodsArray.forEach(doc => console.log(doc));
}

getFoods();

// mongoose.connect('mongodb://localhost/test');

// export const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log('CONNECTED')
//     we're connected!
// });

const app = express();
app.get('/', function (req, res) {
    res.send('hoy');
});

export const server = http.createServer(app).listen(1234, function(err) {
    if (err) {
        console.log(err);
    } else {
        const host = server.address().address;
        const port = server.address().port;
        console.log(`Server listening on ${host}:${port}`);
    }
});