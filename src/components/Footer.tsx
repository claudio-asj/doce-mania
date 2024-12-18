export function Footer() {
    return (
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
    )
}