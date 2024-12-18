import { Cake, CakeSlice, Croissant, CupSoda, IceCream, PartyPopper } from "lucide-react";
import React, { ElementType, useEffect, useState } from "react";
import { getProducts } from "../utils/getProducts";
import { Product } from "../components/Product";

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

    const [categorySelected, setCategorySelected] = useState('Bolo')
    function changeCategorySelected(newCategory: string) {
        setCategorySelected(newCategory);
    }

    const getProductsByCategory = (category: string) => {
        switch (category) {
            case '':
                return 'Promoções'
            case 'Bolo':
                return 'Bolo'
            case 'Sorvete':
                return 'Sorvete'
            case 'Salgado':
                return 'Salgado'
            case 'Bebida':
                return 'Bebida'
            case 'Doce':
                return 'Doce'
            case 'Kit festa':
                return 'Kit festa'
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

                    <CategoryBtn title="Bolo" Icon={Cake} isSelected={categorySelected == 'Bolo'} onClick={() => { changeCategorySelected('Bolo') }} />
                    <CategoryBtn title="Salgado" Icon={Croissant} isSelected={categorySelected == 'Salgado'} onClick={() => { changeCategorySelected('Salgado') }} />
                    <CategoryBtn title="Sorvete" Icon={IceCream} isSelected={categorySelected == 'Sorvete'} onClick={() => { changeCategorySelected('Sorvete') }} />
                    <CategoryBtn title="Bebida" Icon={CupSoda} isSelected={categorySelected == 'Bebida'} onClick={() => { changeCategorySelected('Bebida') }} />
                    <CategoryBtn title="Doce" Icon={CakeSlice} isSelected={categorySelected == 'Doce'} onClick={() => { changeCategorySelected('Doce') }} />
                    <CategoryBtn title="Kit festa" Icon={PartyPopper} isSelected={categorySelected == 'Kit festa'} onClick={() => { changeCategorySelected('Kit festa') }} />

                </div>

                <h2 className="mt-16 text-2xl font-bold text-azulEscuro">{categoryTitle}</h2>
                {
                    products.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6  mt-4 gap-4">
                            {products.length > 0 ? (
                                products.map((product, index) => (
                                    (product[1] == categorySelected) ? (
                                        <Product
                                            key={index}
                                            name={product[0]}
                                            price={product[2]}
                                            img={product[4]}
                                            description={product[3]}
                                        />
                                    ) : (<span className="hidden">Erro</span>)

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
interface CategoryBtnProp {
    title: string;
    Icon: ElementType;
    isSelected: boolean;
    onClick: () => void;
}
function CategoryBtn({ title, Icon, isSelected, onClick }: CategoryBtnProp) {
    function thisCategoryIsSelected(status: boolean) {
        if (status) {
            return 'bg-rose-500 hover:bg-rose-700 p-6 rounded-full'
        } else {
            return 'bg-rosaEscuro hover:bg-rosaClaro p-4 rounded-full'
        }
    }
    return (
        <button onClick={onClick}>
            <div className={thisCategoryIsSelected(isSelected)}>
                <Icon size={ isSelected ? 40 : 32} color="#fefefe" />
            </div>

            <span className="text-sm font-semibold text-rosaEscuro">{title}</span>
        </button>
    )
}