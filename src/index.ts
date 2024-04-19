import express from 'express';
import router from './routes/Router';

const app = express();
const port = 3002;

app.use(express.json());

app.use('/api/v1', router);

app.listen(port);