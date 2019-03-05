import express from 'express';
import { urlencoded, json } from 'body-parser';

// Setup the HTTP Server
const app: express.Application = express();

// Setup middlewares to parse the body
app.use(urlencoded( { extended: true } ));
app.use(json());

// Listen to port 2030
app.listen(2030, () => {
    console.log('>> Listening on port 2030...');
});
