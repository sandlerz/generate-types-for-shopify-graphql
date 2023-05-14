import express from 'express';
import { fileRouter } from './file.routes.js';

export const ApiRouter = express.Router();

ApiRouter.use('/data', fileRouter);
