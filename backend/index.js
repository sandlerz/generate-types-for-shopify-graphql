import express from 'express';
import cors from 'cors';
import { ApiRouter } from './routes/ApiRouter.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', ApiRouter);

// path localhost:4000/api/data

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
//
