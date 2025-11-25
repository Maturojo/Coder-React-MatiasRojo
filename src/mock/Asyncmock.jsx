import remeraN from "../assets/remera.png"
import remeraB from '../assets/RemeraBlancaSinfondo.jpg'
import buzo from "../assets/BuzoSInFondo.jpg"
import taza from "../assets/tazaSinfondo.jpg"


export const products = [
  {
    id: "1",
    title: "Remera Negra",
    description: "Remera básica negra estampada.",
    price: 12000,
    category: "remeras",
    stock: 10,
    image: remeraN,
  },
  {
    id: "2",
    title: "Remera Blanca",
    description: "Remera básica blanca estampada.",
    price: 11000,
    category: "remeras",
    stock: 8,
    image: remeraB,
  },
  {
    id: "3",
    title: "Hoodie Negro",
    description: "Buzo hoodie negro.",
    price: 25000,
    category: "hoodies",
    stock: 5,
    image: buzo,
  },
  {
    id: "4",
    title: "Taza Personalizada",
    description: "Taza blanca personalizada.",
    price: 8000,
    category: "tazas",
    stock: 20,
    image: taza,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};
