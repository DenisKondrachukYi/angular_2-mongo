import * as express from 'express';
import * as http from 'http';
const port = process.env.PORT || 3000;
import {DataBaseConnector} from './mongo-client-wrapper';
import {UserModel} from "./models/user.model";


const URL = 'mongodb://localhost:27017/mydatabase';

async function connectToDataBase(url) {
    const DB = await DataBaseConnector.connectMongoDB(url);
    return DB;
}

connectToDataBase(URL).then((db) => {
    const userData = {
        name: 'Misha',
        phone: '12321312'
    };
    const user = new UserModel(userData);
    console.log(user.collection);
    // db.collections().then(collections => {
    //     console.log(collections);
    // })
    db.collection('default').find({}).toArray().then(array => {
        console.log("HERE");
        console.log(array);
        array.forEach(user => console.log(user))
    })
});



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