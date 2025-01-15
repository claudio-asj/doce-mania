interface Product {
  name: string;
  price: string;
  img: string;
}

interface productFavorite {
  name: string;
  price: string;
  img: string;
  amount: number;
}

export function addProduct({ name, price, img }: Product) {
  const product: productFavorite = { name, price, img, amount: 1 };

  // Recupera os favoritos do localStorage
  const favorites = localStorage.getItem("favorites");

  if (favorites) {
    // Se já existir, cria os favoritos e adiciona o novo produto
    const favoritesArray: Product[] = JSON.parse(favorites);
    favoritesArray.push(product);

    // Atualiza o localStorage com o novo array de favoritos
    localStorage.setItem("favorites", JSON.stringify(favoritesArray));
  } else {
    // Se não existir, cria o array com o produto inicial
    const newFavorites: Product[] = [product];
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  }

  console.log("Produto adicionado aos favoritos!");
}
