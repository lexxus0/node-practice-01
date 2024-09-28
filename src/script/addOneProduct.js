// import * as fs from 'node:fs/promises';
// import { PATH_DB } from '../constants/products.js';
import { createFakeProduct } from '../utils/createFakeproduct.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

const addOneProduct = async () => {
  const products = await readProducts();
  const parsProducts = JSON.parse(products);

  parsProducts.push(createFakeProduct());

  await writeProducts(parsProducts);
};
addOneProduct();
