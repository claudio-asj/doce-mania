import { Heart } from "lucide-react";
import { useFavorites } from "../context/FavoritesContext";

interface ProductProp {
  name: string;
  img: string;
  price: string;
  description: string;
  // Adicionei amount para compatibilidade com a função addFavorite do contexto
  amount?: number;
}

export function Product({ name, img, price, description }: ProductProp) {
  // 2. Acessar o estado global e as funções do contexto
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  // 3. Determinar se o produto é favorito DIRETAMENTE do estado global.
  //    Isso substitui o useState, useEffect e as funções de checagem manual.
  const isFavorited = favorites.some((product) => product.name === name);

  // 4. Simplificar o handleClick para usar as funções do contexto
  const handleClick = () => {
    if (isFavorited) {
      removeFavorite(name);
    } else {
      // Criamos o objeto completo para adicionar ao contexto
      const productToAdd = { name, price, img, amount: 1 };
      addFavorite(productToAdd);
    }
  };

  // Todo o bloco com useState, useCallback e useEffect foi removido pois não é mais necessário.

  return (
    <div className="relative cursor-pointer border-slate-50 border-2 rounded-lg shadow-lg overflow-hidden min-h-52 transform transition-transform duration-300 hover:scale-110">
      {/* Imagem do Produto */}
      <img
        src={img || "https://via.placeholder.com/150"}
        alt={name}
        className="w-full h-32 transform transition-transform duration-300 hover:scale-110"
      />
      <div className="p-2">
        {/* Nome do Produto */}
        <h3 className="font-bold text-marrom line-clamp-2 h-[calc(2*1.8em)] overflow-hidden text-ellipsis whitespace-normal">
          {name}
        </h3>
        {/* Preço */}
        <p className="text-sm font-semibold text-rosaEscuro">{price}</p>
        <p className="text-sm hidden">{description}</p>
      </div>
      <button
        onClick={handleClick}
        // O estilo do botão agora depende diretamente da constante 'isFavorited'
        className={`absolute top-3 right-2 rounded-full p-1 transform transition-transform duration-300 hover:scale-105 ${
          isFavorited ? "bg-red-200/95" : "bg-slate-50 opacity-25"
        }`}
      >
        <Heart
          size={18}
          color={isFavorited ? "#fe0000" : "#000000"}
          fill={isFavorited ? "#fe0000" : "none"}
        />
      </button>
    </div>
  );
}
