import type { IProduct } from "./../interfaces/Product.interface";
export default [
  {
    id: 1,
    description: "Ceci est un bitcoins stable",
    title: "Bitcoins",
    price: 10000,
    category: "desktop",
  },
  {
    id: 2,
    description: "Ceci est un LTC stable",
    title: "LTC",
    price: 11,
    category: "gamer",
  },
  {
    id: 3,
    description: "Ceci est un DOGECOINS stable",
    title: "DOGECOINS",
    price: 214,
    category: "streaming",
  },
  {
    id: 4,
    description: "Ceci est un SOLANA stable",
    title: "SOLANA",
    price: 31,
    category: "desktop",
  },
] as IProduct[];
