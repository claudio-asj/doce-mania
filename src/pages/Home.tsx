import { BadgePercent, Cake, CakeSlice, Coffee, Cookie, Croissant, CupSoda } from "lucide-react";

export function Home() {
    return (
        <div className="bg-branco text-preto">
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