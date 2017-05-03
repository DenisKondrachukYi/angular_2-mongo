import * as express from 'express';
import * as http from 'http';
const port = process.env.PORT || 3000;

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