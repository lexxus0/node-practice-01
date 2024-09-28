import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const removeRandomProduct = async () => {
  const data = JSON.parse(await fs.readFile(PATH_DB));
  const random = Math.floor(Math.random() * data.length);
  data.splice(random, 1);

  fs.writeFile(PATH_DB, JSON.stringify(data));
};

removeRandomProduct();
