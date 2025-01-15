interface Product {
  name: string;
  price: string;
  img: string;
  amount: number;
}

export function getFavorites(): Product[] {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
}
