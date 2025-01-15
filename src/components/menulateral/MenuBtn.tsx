import { ClipboardList, FacebookIcon, Heart, Instagram, X } from "lucide-react";
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
            <button onClick={openDialog} className="fixed top-3 right-4 p-2 bg-rosaClaro/35 hover:bg-rosaClaro rounded-lg h-fit w-fit">
                <ClipboardList className="h-6 w-6 text-white" />
            </button>

            <dialog ref={dialogRef} className="mx-auto w-full max-w-sm rounded-lg shadow-lg">
                <div className="flex justify-between items-center bg-rosaClaro p-4">
                    <span className="text-lg font-bold text-marrom">Doce Mania</span>
                    <button onClick={closeDialog} className="text-white hover:text-rosaEscuro" >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <section className="p-4 pb-12">
                    <div className="mt-4 mb-2 flex items-center justify-center gap-2 font-semibold text-lg text-rosaEscuro"> <Heart className="h-4 w-4" /> Favoritos</div>
                    <ul className="space-y-4">
                        {
                            favorites.map((product, index) => (
                                <li key={index} className="flex items-center gap-2 border-b-2 border-slate-200 pb-3">
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="h-12 min-w-12 shadow rounded"
                                    />
                                    <div className="w-full">{product.name}</div>
                                    {/* <div className="w-14">x{product.amount} </div> */}
                                    <div className="w-32 text-right">{product.price}</div>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="text-center text-sm mt-8 mx-4 font-thin italic leading-4 text-black/60">
                        Esses são seus favoritos! Você pode chamar o garçom a qualquer momento para realizar seu pedido.
                    </div>

                    <div className="flex items-center justify-center gap-4 mt-12">
                        <a className="bg-rosaClaro/55 hover:bg-rosaClaro p-2 rounded shadow" href="#">
                            <Instagram className="h-6 w-6 text-rosaEscuro" />
                        </a>
                        <a className="bg-rosaClaro/55 hover:bg-rosaClaro p-2 rounded shadow" href="#">
                            <FacebookIcon className="h-6 w-6 text-rosaEscuro" />
                        </a>
                        <a className="bg-rosaClaro/55 hover:bg-rosaClaro p-2 rounded shadow" href="#">
                            <Instagram className="h-6 w-6 text-rosaEscuro" />
                        </a>
                    </div>
                </section>
            </dialog>
        </>


    )
}