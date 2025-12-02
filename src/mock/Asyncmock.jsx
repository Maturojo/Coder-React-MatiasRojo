


export const products = [
  {
    id: "1",
    title: "Remera Negra",
    description: "Remera básica negra estampada.",
    price: 12000,
    category: "remeras",
    stock: 10,
    image: "/img/remera.png",
  },
  {
    id: "2",
    title: "Remera Blanca",
    description: "Remera básica blanca estampada.",
    price: 11000,
    category: "remeras",
    stock: 8,
    image: "/img/remera-blanca.jpg",
  },
  {
    id: "3",
    title: "Hoodie Negro",
    description: "Buzo hoodie negro.",
    price: 25000,
    category: "hoodies",
    stock: 5,
    image: "img/buzo.jpg",
  },
  {
    id: "4",
    title: "Taza Personalizada",
    description: "Taza blanca personalizada.",
    price: 8000,
    category: "tazas",
    stock: 20,
    image: "img/taza.jpg",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};
