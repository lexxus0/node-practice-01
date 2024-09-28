import { PATH_DB } from '../constants/products.js';
import * as fs from 'node:fs/promises';

export const writeProducts = async (products) => {
  await fs.writeFile(PATH_DB, JSON.stringify(products), { encoding: 'utf-8' });
  
};
