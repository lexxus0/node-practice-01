import { PATH_DB } from '../constants/products.js';
import * as fs from 'node:fs/promises';
import { writeProducts } from './writeProducts.js';

export const readProducts = async () => {
  return (
    (await fs.readFile(PATH_DB, { encoding: 'utf-8' })) || JSON.stringify([])
  );
};
