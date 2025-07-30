import {
  ClipboardList,
  Trash2,
  X,
  MessageCircle,
  ShoppingBasket, // Ícone para a lista vazia
} from "lucide-react";
import { useRef, useMemo } from "react";
import { useFavorites } from "../../context/FavoritesContext";

export function MenuBtn() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const { favorites, clearFavorites, removeFavorite, updateAmount } =
    useFavorites();

  // 1. Transições mais suaves ao abrir/fechar o dialog
  const openDialog = () => dialogRef.current?.showModal();
  const closeDialog = () => dialogRef.current?.close();

  // 2. Cálculo do valor total do pedido (melhora de UX)
  // useMemo evita que o cálculo seja refeito em toda renderização
  const totalPrice = useMemo(() => {
    const total = favorites.reduce((acc, product) => {
      // Converte o preço "R$ 10,50" para um número 10.50
      const priceAsNumber = parseFloat(
        product.price.replace("R$", "").replace(",", ".").trim()
      );
      return acc + priceAsNumber * product.amount;
    }, 0);

    // Formata o número de volta para o formato de moeda brasileira
    return total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }, [favorites]);

  const handleWhatsAppOrder = () => {
    if (favorites.length === 0) return;

    const phoneNumber = "5521979317341";
    const orderItems = favorites
      .map(
        (product) => `- ${product.amount}x ${product.name} (${product.price})`
      )
      .join("\n");

    // Adiciona o valor total à mensagem
    const message = `Olá! Gostaria de fazer o seguinte pedido:\n\n${orderItems}\n\n*Total: ${totalPrice}*\n\nObrigado!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <button
        onClick={openDialog}
        className="fixed z-40 top-4 right-4 p-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg text-white transition-colors"
      >
        <ClipboardList className="h-6 w-6" />
      </button>

      {/* 3. Estilização do Dialog e Backdrop para uma entrada suave */}
      <dialog
        ref={dialogRef}
        className="
          p-0 w-full max-w-md rounded-2xl shadow-xl bg-slate-50
          backdrop:bg-black/40 backdrop:backdrop-blur-sm
          open:opacity-100 open:scale-100 transition-all duration-300
          opacity-0 scale-95
        "
      >
        {/* Cabeçalho Fixo */}
        <header className="sticky top-0 flex justify-between items-center bg-rosaClaro p-4 border-b border-rosaClaro/20">
          <span className="text-lg font-bold text-marrom">Seu Pedido</span>
          <button
            onClick={closeDialog}
            className="p-1 rounded-full text-white hover:bg-black/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        {/* 4. Tratamento de "Estado Vazio" com uma mensagem clara */}
        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4 p-10 text-center">
            <ShoppingBasket size={48} className="text-slate-300" />
            <h3 className="font-bold text-slate-600">Sua lista está vazia</h3>
            <p className="text-sm text-slate-500">
              Adicione seus doces favoritos para vê-los aqui!
            </p>
          </div>
        ) : (
          <>
            {/* 5. Conteúdo com scroll e melhor espaçamento */}
            <main className="p-5 max-h-[50vh] overflow-y-auto">
              <ul className="space-y-5">
                {favorites.map((product) => (
                  <li
                    key={product.name}
                    className="flex items-center gap-4 text-sm"
                  >
                    <img
                      src={product.img}
                      alt={product.name}
                      className="h-16 w-16 rounded-lg object-cover"
                    />
                    <div className="flex-grow">
                      <p className="font-semibold text-slate-800">
                        {product.name}
                      </p>
                      <p className="text-slate-500">{product.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        value={product.amount}
                        onChange={(e) =>
                          updateAmount(
                            product.name,
                            parseInt(e.target.value, 10) || 1
                          )
                        }
                        className="w-14 text-center border rounded-md p-1 bg-white"
                        min="1"
                      />
                      <button
                        onClick={() => removeFavorite(product.name)}
                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </main>

            {/* 6. Rodapé fixo com total e botões de ação com hierarquia visual */}
            <footer className="sticky bottom-0 bg-white/80 backdrop-blur-sm p-5 border-t border-slate-200 space-y-4">
              <div className="flex justify-between items-center font-semibold text-slate-800">
                <span>Total</span>
                <span className="text-xl">{totalPrice}</span>
              </div>
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleWhatsAppOrder}
                  className="flex items-center justify-center gap-2 w-full p-3 rounded-lg text-white bg-green-500 hover:bg-green-600 font-bold transition-colors shadow-lg shadow-green-500/20"
                >
                  <MessageCircle size={20} />
                  Enviar Pedido via WhatsApp
                </button>
                <button
                  onClick={clearFavorites}
                  className="w-full p-2 rounded-lg text-sm text-red-500 hover:bg-red-100 font-medium transition-colors"
                >
                  Limpar lista
                </button>
              </div>
            </footer>
          </>
        )}
      </dialog>
    </>
  );
}
