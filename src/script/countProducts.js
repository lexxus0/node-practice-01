// import * as fs from 'node:fs/promises';
// import { PATH_DB } from '../constants/products.js';
import { readProducts } from '../utils/readProducts.js';

export const countProducts = async () => {
  const products = await readProducts();
  const parsProducts = JSON.parse(products);
  return parsProducts.length;
};
console.log(await countProducts());
