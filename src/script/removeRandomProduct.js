import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

const removeRandomProduct = async () => {
  const products = await readProducts();
  const data = JSON.parse(products);
  const random = Math.floor(Math.random() * data.length);
  data.splice(random, 1);

  await writeProducts(data);
};

removeRandomProduct();
