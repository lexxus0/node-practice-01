import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const clearProducts = async () => {
  await fs.writeFile(PATH_DB, JSON.stringify([]), {
    encoding: 'utf-8',
  });
};

clearProducts();
