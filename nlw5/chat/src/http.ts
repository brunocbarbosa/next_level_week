import express from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io'
import path from 'path'

import './database';
import { routes } from './routes'

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('views', path.join(__dirname, '..', 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/pages/client', (req, res) => {
  return res.render('html/client.html')
})

const http = createServer(app); //created http protocol
const io = new Server(http); //created web socket protocol

io.on('connection', (socket: Socket) => {
  // console.log("Socket conectado em ", socket.id)
})

app.use(express.json())

app.use(routes);

export { http, io }