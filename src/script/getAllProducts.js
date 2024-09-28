import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const getAllProducts = async () => {
  const response = await fs.readFile(PATH_DB);
  return JSON.parse(response);
};

console.log(await getAllProducts());
