import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
import { createFakeProduct } from '../utils/createFakeproduct.js';

const addOneProduct = async () => {
  const readProducts = await fs.readFile(PATH_DB);

  const parsProducts = JSON.parse(readProducts);

  parsProducts.push(createFakeProduct());

  await fs.writeFile(PATH_DB, JSON.stringify(parsProducts), {
    encoding: 'utf-8',
  });
};
addOneProduct();
