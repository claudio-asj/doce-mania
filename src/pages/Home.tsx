import { BadgePercent, Cake, CakeSlice, Coffee, Cookie, Croissant, CupSoda } from "lucide-react";
import { useEffect, useState } from "react";
import { getProducts } from "../utils/getProducts";

export function Home() {

    const [products, setProducts] = useState<string[][]>([]); // Estado para armazenar os dados
    // Chama a API quando a página carrega
    useEffect(() => {
        async function fetchData() {
            const data = await getProducts();
            setProducts(data); // Salva os dados no estado
        }

        fetchData();
    }, []);

    const [categorySelected, setCategorySelected] = useState('promo')
    function changeCategorySelected(newCategory: string) {
        setCategorySelected(newCategory);
    }
    function thisCategoryIsSelected(status: boolean) {
        if (status) {
            return 'bg-rose-500 hover:bg-rose-700 p-6 rounded-full'
        } else {
            return 'bg-rosaEscuro hover:bg-rosaClaro p-4 rounded-full'
        }
    }

    const getProductsByCategory = (category: string) => {
        switch (category) {
            case 'promo':
                return 'Promoções'
            case 'biscoitos':
                return 'Biscoitos'
            case 'bolos':
                return 'Bolos'
            case 'tortas':
                return 'Tortas'
            case 'doces':
                return 'Doces'
            case 'bebidas':
                return 'Bebidas'
            default:
                return ''
        }
    }

    const categoryTitle = getProductsByCategory(categorySelected)

    return (
        <div className="bg-branco text-preto">
            <main className="bg-rosaEscuro flex justify-center items-center min-h-[40vh] p-4 py-8 rounded-b-3xl shadow-lg">
                <img src="/logovertical.svg" alt="" className="h-64" />
            </main>
            <section className="max-w-5xl mx-auto mt-16 px-4">
                <div className="flex items-center justify-between gap-4 max-w-full overflow-x-scroll pb-4">
                    <button onClick={() => { changeCategorySelected('promo') }} className={thisCategoryIsSelected(categorySelected == 'promo')}>
                        <BadgePercent size={32} color="#fefefe" />
                    </button>
                    <button onClick={() => { changeCategorySelected('biscoitos') }} className={thisCategoryIsSelected(categorySelected == 'biscoitos')}>
                        <Cookie size={32} color="#fefefe" />
                    </button>
                    <button onClick={() => { changeCategorySelected('bolos') }} className={thisCategoryIsSelected(categorySelected == 'bolos')}>
                        <Cake size={32} color="#fefefe" />
                    </button>
                    <button onClick={() => { changeCategorySelected('tortas') }} className={thisCategoryIsSelected(categorySelected == 'tortas')}>
                        <CakeSlice size={32} color="#fefefe" />
                    </button>
                    <button onClick={() => { changeCategorySelected('salgados') }} className={thisCategoryIsSelected(categorySelected == 'salgados')}>
                        <Croissant size={32} color="#fefefe" />
                    </button>
                    <button onClick={() => { changeCategorySelected('bebidasQuentes') }} className={thisCategoryIsSelected(categorySelected == 'bebidasQuentes')}>
                        <Coffee size={32} color="#fefefe" />
                    </button>
                    <button onClick={() => { changeCategorySelected('bebidasGeladas') }} className={thisCategoryIsSelected(categorySelected == 'bebidasGeladas')}>
                        <CupSoda size={32} color="#fefefe" />
                    </button>
                </div>

                <h2 className="mt-16 text-2xl font-bold text-azulEscuro">{categoryTitle}</h2>
                {
                    products.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6  mt-4 gap-4">
                            {products.length > 0 ? (
                                products.map((product, index) => (
                                    <div
                                        key={index}
                                        className="border-slate-50 border-2 rounded-lg shadow-lg overflow-hidden min-h-52"
                                    >
                                        {/* Imagem do Produto */}
                                        <img
                                            src={product[4] || "https://via.placeholder.com/150"} // Ajuste o índice conforme a API
                                            alt={product[1]}
                                            className="w-full h-32"
                                        />
                                        <div className="p-2">
                                            {/* Nome do Produto */}
                                            <h3 className="font-bold text-marrom">{product[0]}</h3>
                                            {/* Preço */}
                                            <p className="text-sm">
                                                {product[2]}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>Carregando dados...</p>
                            )}
                        </div>
                    ) : (<span>erro</span>)
                }
            </section>


            <footer className="bg-rosaEscuro text-branco py-6 mt-32">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <img src="/logofooter.png" alt="Logo DoceMania" className="h-16" />
                    </div> <div className="text-center md:text-left">
                        <p className="text-sm">&copy; 2024 DoceMania. Todos os direitos reservados.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-preto hover:text-branco">Facebook</a>
                        <a href="#" className="text-preto hover:text-branco">Instagram</a>
                        <a href="#" className="text-preto hover:text-branco">Whatsapp</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}