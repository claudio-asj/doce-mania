import { BadgePercent, Cake, CakeSlice, Coffee, Cookie, Croissant, CupSoda } from "lucide-react";

export function Home() {
    return (
        <div className="min-h-screen bg-branco text-preto">
            <main className="bg-rosaEscuro flex justify-center items-center min-h-[40vh] p-4 py-8 rounded-b-3xl shadow-lg">
                <img src="/logovertical.svg" alt="" className="h-64" />
            </main>
            <section className="max-w-5xl mx-auto mt-16">
                <div className="flex items-center justify-between">
                    <button className="bg-rosaEscuro hover:bg-rosaClaro p-4 rounded-full">
                        <BadgePercent size={32} color="#fefefe" />
                    </button>
                    <button className="bg-rosaEscuro hover:bg-rosaClaro p-4 rounded-full">
                        <Cookie size={32} color="#fefefe" />
                    </button>
                    <button className="bg-rosaEscuro hover:bg-rosaClaro p-4 rounded-full">
                        <Cake size={32} color="#fefefe" />
                    </button>
                    <button className="bg-rosaEscuro hover:bg-rosaClaro p-4 rounded-full">
                        <CakeSlice size={32} color="#fefefe" />
                    </button>
                    <button className="bg-rosaEscuro hover:bg-rosaClaro p-4 rounded-full">
                        <Croissant size={32} color="#fefefe" />
                    </button>
                    <button className="bg-rosaEscuro hover:bg-rosaClaro p-4 rounded-full">
                        <Coffee size={32} color="#fefefe" />
                    </button>
                    <button className="bg-rosaEscuro hover:bg-rosaClaro p-4 rounded-full">
                        <CupSoda size={32} color="#fefefe" />
                    </button>
                </div>
            </section>
        </div>
    )
}