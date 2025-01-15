import { getFavorites } from "./getFavorites";

export function removeFavoriteByName(name: string) {
  const favorites = getFavorites();

  // Filtrar a lista removendo o produto com o nome correspondente
  const updatedFavorites = favorites.filter((product) => product.name !== name);

  // Atualizar o localStorage com a lista filtrada
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

  console.log(`Produto com o nome "${name}" foi removido dos favoritos.`);
}
