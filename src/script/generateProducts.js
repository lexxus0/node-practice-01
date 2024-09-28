import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
import { createFakeProduct } from '../utils/createFakeproduct.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

const generateProducts = async (number) => {
  const products = await readProducts();
  const parsProducts = JSON.parse(products);
  for (let i = 0; i < number; i++) {
    parsProducts.push(createFakeProduct());
  }

  await writeProducts(parsProducts);
};
generateProducts(5);
