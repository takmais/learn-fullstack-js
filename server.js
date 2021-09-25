import express from 'express';
import config from './config';
import apiRouter from './api';

const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index', {
    content: 'Hellow <em>EJS</em>!',
    title: 'Title for Page'
  });
});

server.use(express.static('public'));
server.use('/api', apiRouter);

server.listen(config.port, () => {
  console.log(`listening on port ${config.port}`);
});