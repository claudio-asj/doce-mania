export function clearFavorites() {
  localStorage.removeItem("favorites");
  alert(
    "preciso atualizar os produtos, posso passar se ele ta favoritado pela tela home, daí eu posso fazer atualizacao deles um por um"
  );
}
