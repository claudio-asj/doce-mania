import { Heart } from "lucide-react";
import { addProduct } from "../utils/addProduct";
import { getFavorites } from "../utils/getFavorites";
import { useEffect, useState } from "react";
import { removeFavoriteByName } from "../utils/removeFavoriteByName";

interface ProductProp {
    name: string;
    img: string;
    price: string;
    description: string;
}
export function Product({ name, img, price, description }: ProductProp) {
    const handleClick = () => {
        if (!isFavorited) {
            addProduct({ name, price, img });
        } else {
            removeFavoriteByName(name)
        }

        console.log('favoritando')
        atualizaFavorito()
    };

    const [isFavorited, setIsFavorited] = useState<boolean>(false)


    // Função para verificar se o produto está no localStorage
    const checkIfFavorite = (productName: string): boolean => {
        const favorites = localStorage.getItem("favorites");
        if (favorites) {
            const favoritesArray = getFavorites();
            return favoritesArray.some((product: { name: string }) => product.name == productName);
        }
        return false;
    };

    const atualizaFavorito = () => {
        if (checkIfFavorite(name)) {
            setIsFavorited(true)
        } else {
            setIsFavorited(false)
        }
    }


    useEffect(() => {
        atualizaFavorito()
        console.log(`${name} : ${isFavorited ? 'contem' : 'nao contem'}`)
    }, [])

    return (
        <div
            className="relative cursor-pointer border-slate-50 border-2 rounded-lg shadow-lg overflow-hidden min-h-52 transform transition-transform duration-300 hover:scale-110"
        >
            {/* Imagem do Produto */}
            <img
                src={img || "https://via.placeholder.com/150"} // Ajuste o índice conforme a API
                alt={name}
                className="w-full h-32 transform transition-transform duration-300 hover:scale-110"
            />
            <div className="p-2">
                {/* Nome do Produto */}
                <h3 className="font-bold text-marrom line-clamp-2 h-[calc(2*1.8em)] overflow-hidden text-ellipsis whitespace-normal">{name}</h3>
                {/* Preço */}
                <p className="text-sm font-semibold text-rosaEscuro">
                    {price}
                </p>
                <p className="text-sm hidden">
                    {description}
                </p>
            </div>
            <button onClick={handleClick} className={`absolute top-3 right-2 rounded-full bg-slate-50/55 p-1 transform transition-transform duration-300 hover:scale-105 ${isFavorited ? 'bg-red-200/95' : 'bg-slate-50 opacity-25'}`}>
                <Heart size={18} color="#fe0000" />
            </button>
        </div>
    )
}