import { Heart } from "lucide-react";

interface ProductProp {
    name: string;
    img: string;
    price: string;
    description: string;
}
export function Product({name, img,price, description}:ProductProp) {
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
            <button className="absolute top-3 right-2 rounded-full bg-slate-50/55 hover:bg-red-200/95 p-1 transform transition-transform duration-300 hover:scale-105">
                <Heart size={18} color="#fe0000" />
            </button>
        </div>
    )
}