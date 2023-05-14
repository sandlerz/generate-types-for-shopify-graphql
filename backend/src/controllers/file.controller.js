import CryptoJS from 'crypto-js';
import { info_data } from '../../globals.js';
import { exec } from 'child_process';

export const postFile = (req, res) => {
  try {
    // const { url, acces_token } = CryptoJS.AES.decrypt(
    //   info.data,
    //   process.env.PSS_ENCRYP
    // ).toString(CryptoJS.enc.Utf8);
    console.log(req.body);
    const { url, access_token } = req.body;
    const data_global = info_data;

    process.env.DATA_1 = url;
    process.env.DATA_2 = access_token;

    // if (data_global.url === '' || data_global.access_token === '') {
    //   return res.status(500).json({ message: 'Error' });
    // }

    exec('yarn genType', (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error al ejecutar el script');
      }
      console.log(stdout);
      console.log(stderr);
    });

    res.status(200).json({ message: 'Success' });
  } catch (error) {
    res.status(500).json({ message: 'Error' });
  }
};

export const getFile = (req, res) => {
  try {
    res.sendFile('shopify-schema.d.ts', {
      root: '/result/shopify-schema.d.ts',
    });
  } catch (error) {
    res.status(500).json({ message: 'Error' });
  }
};
