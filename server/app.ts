import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as path from 'path';

import setRoutes from './routes';

const app = express();
dotenv.load({ path: '.env' });
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// let mongodbURI;
// if (process.env.NODE_ENV === 'test') {
//   mongodbURI = process.env.MONGODB_TEST_URI;
// } else {
//   mongodbURI = process.env.MONGODB_URI;
//   app.use(morgan('dev'));
// }

setRoutes(app);

export { app };
