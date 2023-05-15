import express from 'express';
import {
  deleteFile,
  getFile,
  postFile,
} from '../src/controllers/file.controller.js';
export const fileRouter = express.Router();

fileRouter
  .post('/sendInfo', postFile)
  .post('/getFile', getFile)
  .delete('/deleteFile', deleteFile);
