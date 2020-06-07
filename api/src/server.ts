import express from 'express';
import cors from 'cors';
import path from 'path';
import { errors } from 'celebrate';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json()); //wor with json in express
app.use(routes); //access routes in another path

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))); //work with statics files, in this case, images

app.use(errors());

app.listen(3333);