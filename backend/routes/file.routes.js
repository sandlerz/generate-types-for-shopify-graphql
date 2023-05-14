import express from 'express';
import { getFile, postFile } from '../src/controllers/file.controller.js';
export const fileRouter = express.Router();

fileRouter.post('/sendInfo', postFile).get('/getFile', getFile);
