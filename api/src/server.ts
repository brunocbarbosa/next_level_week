import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json()); //wor with json in express
app.use(routes); //access routes in another path

app.use('/img', express.static(path.resolve(__dirname, '..', 'img'))); //work with statics files, in this case, images

app.listen(3333);