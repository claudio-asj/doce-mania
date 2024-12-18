interface ProductProp {
    name: string;
    img: string;
    price: string;
    description: string;
}
export function Product({name, img,price, description}:ProductProp) {
    return (
        <div
            className="border-slate-50 border-2 rounded-lg shadow-lg overflow-hidden min-h-52"
        >
            {/* Imagem do Produto */}
            <img
                src={img || "https://via.placeholder.com/150"} // Ajuste o índice conforme a API
                alt={name}
                className="w-full h-32"
            />
            <div className="p-2">
                {/* Nome do Produto */}
                <h3 className="font-bold text-marrom">{name}</h3>
                {/* Preço */}
                <p className="text-sm">
                    {price}
                </p>
                <p className="text-sm hidden">
                    {description}
                </p>
            </div>
        </div>
    )
}