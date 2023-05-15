import CryptoJS from 'crypto-js';
import { info_data } from '../../globals.js';
import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';

export const postFile = async (req, res) => {
  try {
    const { url, access_token } = req.body;

    process.env.DATA_1 = url;
    process.env.DATA_2 = access_token;

    // exec('yarn genType', (err, stdout, stderr) => {
    //   if (err) {
    //     console.error(err);
    //     return res.status(500).send('Error al ejecutar el script');
    //   }
    //   console.log(stdout);
    //   console.log(stderr);
    // });

    process.env.DATA_1 = url;
    process.env.DATA_2 = access_token;

    await new Promise((resolve, reject) => {
      exec('yarn genType', (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          reject(new Error('Error al ejecutar el script'));
        }
        console.log(stdout);
        console.log(stderr);
        resolve();
      });
    });

    const files = fs.readdirSync('./result');
    const sortedFiles = files
      .filter((file) => file.endsWith('.d.ts'))
      .sort((a, b) => {
        const aStat = fs.statSync(`./result/${a}`);
        const bStat = fs.statSync(`./result/${b}`);
        return bStat.mtimeMs - aStat.mtimeMs;
      });

    if (sortedFiles.length === 0) {
      throw new Error('No se encontró ningún archivo generado');
    }

    const latestFile = sortedFiles[0];
    res.status(200).json({ name: latestFile });
  } catch (error) {
    res.status(500).json({ message: 'Error' });
  }
};

export const getFile = (req, res) => {
  try {
    const { name } = req.body;
    const currentFile = new URL(import.meta.url).pathname;
    const file = path.resolve(
      path.dirname(currentFile),
      `../../result/${name}`
    );
    res.sendFile(file);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteFile = (req, res) => {
  const { name } = req.body;
  const currentFile = new URL(import.meta.url).pathname;
  const file = path.resolve(path.dirname(currentFile), `../../result/${name}`);
  fs.unlinkSync(file);
  res.status(200).json({ message: 'Archivo eliminado' });
};
