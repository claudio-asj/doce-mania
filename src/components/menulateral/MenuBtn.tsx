import { ClipboardList, Heart, X } from "lucide-react";
import { useRef, useState } from "react";
import { getFavorites } from "../../utils/getFavorites";


interface Product {
    name: string;
    price: string;
    img: string;
    amount: number
}


export function MenuBtn() {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const [favorites, setFavorites] = useState<Product[]>([]);

    const openDialog = () => {
        dialogRef.current?.showModal();
        setFavorites(getFavorites())

    };

    const closeDialog = () => {
        dialogRef.current?.close();
    };


    return (
        <>
            <button onClick={openDialog} className="absolute top-3 right-4 p-2 bg-rosaClaro/35 hover:bg-rosaClaro rounded-lg h-fit w-fit">
                <ClipboardList className="h-6 w-6 text-white" />
            </button>

            <dialog ref={dialogRef} className="mx-auto w-full max-w-sm rounded-lg shadow-lg">
                <div className="flex justify-between items-center bg-rosaClaro p-4">
                    <span className="text-lg font-bold text-marrom">Menu</span>
                    <button onClick={closeDialog} className="text-white hover:text-rosaEscuro" >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <section className="p-4 pb-12">
                    <div className="mt-4 mb-2 flex items-center justify-center gap-2 font-semibold text-lg text-rosaEscuro"> <Heart className="h-4 w-4" /> Favoritos</div>
                    <ul className="space-y-4">
                        {
                            favorites.map((product, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="h-12 w-12"
                                    />
                                    <div className="w-full">{product.name}</div>
                                    <div className="w-14">x{product.amount} </div>
                                    <div className="w-32 text-right">{product.price}</div>
                                </li>
                            ))
                        }
                    </ul>
                </section>
            </dialog>
        </>


    )
}