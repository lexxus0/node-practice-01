import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const countProducts = async () => {
  const readProducts = await fs.readFile(PATH_DB);
  const parsProducts = JSON.parse(readProducts);
  return parsProducts.length;
};
console.log(await countProducts());
