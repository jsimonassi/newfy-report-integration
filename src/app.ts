// src/app.ts
import express from 'express';
import router from './routes/router';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/v1', router);

app.listen(port, () => {
  console.log(`Serviço rodando em http://localhost:${port}`);
});