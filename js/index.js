import Products from "./products/products.js";

const products = [
  {
    id: 1,
    title: 'Cerveza Quilmes Lata',
    price: 2.5,
    imageSrc: './assets/images/cerveza-quilmes-lata.jpg',
  },
  {
    id: 2,
    title: 'Cerveza Brahama Lata',
    price: 3.5,
    imageSrc: './assets/images/cerveza-quilmes-lata.jpg',
  },
  {
    id: 3,
    title: 'Cerveza Brahama Botella',
    price: 4.5,
    imageSrc: './assets/images/cerveza-quilmes-lata.jpg',
  }
]

const productsInstance = new Products(products);

productsInstance.renderProducts();
