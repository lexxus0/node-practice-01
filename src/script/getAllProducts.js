import { readProducts } from '../utils/readProducts.js';

export const getAllProducts = async () => {
  const response = await readProducts();
  return JSON.parse(response);
};

console.log(await getAllProducts());
