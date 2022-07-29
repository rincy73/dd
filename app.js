import express from 'express';
import bodyParser from 'body-parser';
import onError from './middleware/on-error.js';
import generateError from './controllers/generate-error.js';
import setHeaders from './middleware/set-headers.js';
import generateOk from './controllers/generate-ok.js';

const app = express();

console.log('inizio');

app.use(bodyParser.json());

app.use(setHeaders);
app.use('/error/', generateError);
app.use('/', generateOk);
app.use(onError);
app.listen(8080);
