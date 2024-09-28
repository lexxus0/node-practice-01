// import * as fs from 'node:fs/promises';
// import { PATH_DB } from '../constants/products.js';
import { writeProducts } from '../utils/writeProducts.js';

const clearProducts = async () => {
  await writeProducts([]);
};

clearProducts();
