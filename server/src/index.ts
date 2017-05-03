import * as express from 'express';
import * as http from 'http';
const port = process.env.PORT || 3000;

import * as mongo from 'mongodb';
import { Db } from "mongodb";
const URL = 'mongodb://localhost:27017/mydatabase';

let DB: Db;

const mongoClient = mongo.MongoClient;

mongoClient.connect(URL, function(err, db) {
    if (err) {
        console.log("ERROR BOYS", err);
        return
    }
    DB = db;
    console.log('ADDED')
});

setTimeout(() => {
   DB.collection('foods').find({name: 'taco'}).toArray((err, docs) => {
       console.log(docs[0]);
   })
},200);

// setTimeout(() => {
//   DB.collection('foods').insertOne({name: 'chips', tasty: false})
// }, 1000);

setTimeout(() => {
   DB.collection('foods').find({}).toArray().then(docs => {
       docs.forEach(doc => console.log(doc._id));
   })
}, 1200);

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