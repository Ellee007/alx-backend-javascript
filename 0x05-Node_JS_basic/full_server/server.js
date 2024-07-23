import express from 'express';
import routes from './routes/index';

const PORT = 1245;
const app = express();

app.use(routes);

app.listen(PORT);

module.exports = app;
