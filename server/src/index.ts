import * as http from 'http';
const port = process.env.PORT || 3000;
import {DataBaseConnector} from './mongo-client-wrapper';
import App from './app';
import {Product, ProductModel, PRODUCTS_COLLECTION} from "./models/product.model";


const URL = 'mongodb://localhost:27017/mydatabase';

async function connectToDataBase(url) {
    return await DataBaseConnector.connectMongoDB(url);
}

connectToDataBase(URL).then((db) => {
    const userData: Product = {
        image: 'Misha',
        title: '12321312',
        description: 'Test Desc',
        price: 12
    };
    const product: ProductModel = new ProductModel(userData);
    // product.addToCollection();

    // setTimeout(() => {
    //     const userData: Product = {
    //         image: 'TEST PRODUCT',
    //         title: '12321312',
    //         description: 'Test Desc',
    //         price: 6
    //     };
    //     new ProductModel(userData)
    //         .addToCollection();
    // }, 2000);
    // user.addToCollection();
    // console.log(user.collection);
    // db.collections().then(collections => {
    //     console.log(collections);
    // })
    // db.collection(PRODUCTS_COLLECTION).find({}).toArray().then(array => {
    //     array.forEach(user => console.log(user))
    // })
});



// mongoose.connect('mongodb://localhost/test');

// export const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log('CONNECTED')
//     we're connected!
// });


export const server = http.createServer(App).listen(1234, function(err) {
    if (err) {
        console.log(err);
    } else {
        const host = server.address().address;
        const port = server.address().port;
        console.log(`Server listening on ${host}:${port}`);
    }
});