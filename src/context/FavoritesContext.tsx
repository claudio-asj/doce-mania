import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Interfaces (sem alterações)
interface Product {
  name: string;
  price: string;
  img: string;
  amount: number;
}

interface FavoritesContextData {
  favorites: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (productName: string) => void;
  clearFavorites: () => void;
  updateAmount: (productName: string, amount: number) => void;
}

interface FavoritesProviderProps {
  children: ReactNode;
}

const FavoritesContext = createContext<FavoritesContextData>(
  {} as FavoritesContextData
);

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  // --- CORREÇÃO PRINCIPAL AQUI ---
  // Usamos uma função para inicializar o useState.
  // Isso é executado apenas UMA VEZ, na criação do componente.
  const [favorites, setFavorites] = useState<Product[]>(() => {
    const storedFavorites = localStorage.getItem("favorites");
    // Se houver dados no localStorage, o estado já começa com eles.
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  // --- O useEffect de carregamento foi REMOVIDO pois não é mais necessário. ---

  // Este useEffect agora funciona corretamente, pois o estado 'favorites'
  // já começa com os dados corretos, e não mais com um array vazio.
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]); // Roda sempre que a lista de favoritos for alterada.

  // As funções abaixo continuam iguais
  function addFavorite(product: Product) {
    // Para evitar adicionar duplicatas
    if (!favorites.some((fav) => fav.name === product.name)) {
      // Garantimos que o produto tenha amount: 1 se não for especificado
      const productToAdd = { ...product, amount: product.amount || 1 };
      setFavorites((currentFavorites) => [...currentFavorites, productToAdd]);
    }
  }

  function removeFavorite(productName: string) {
    setFavorites((currentFavorites) =>
      currentFavorites.filter((product) => product.name !== productName)
    );
  }

  function clearFavorites() {
    setFavorites([]);
  }

  function updateAmount(productName: string, amount: number) {
    const newAmount = Math.max(1, amount);
    setFavorites((currentFavorites) =>
      currentFavorites.map((product) =>
        product.name === productName
          ? { ...product, amount: newAmount }
          : product
      )
    );
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        clearFavorites,
        updateAmount,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  return context;
}
