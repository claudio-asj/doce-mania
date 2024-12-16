// categorias.ts

export interface Produto {
    id: number;
    name: string;
    price: number;
    imgLink: string;
  }
  
  // Categorias com produtos e links de imagem genéricos
  export const promo: Produto[] = [
    {
      id: 1,
      name: "Promoção 1",
      price: 10.99,
      imgLink: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Promoção 2",
      price: 15.99,
      imgLink: "https://via.placeholder.com/150"
    }
  ];
  
  export const biscoitos: Produto[] = [
    {
      id: 1,
      name: "Bicoito 1",
      price: 2.99,
      imgLink: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Bicoito 2",
      price: 3.49,
      imgLink: "https://via.placeholder.com/150"
    }
  ];
  
  export const bolos: Produto[] = [
    {
      id: 1,
      name: "Bolo Chocolate",
      price: 25.50,
      imgLink: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Bolo Morango",
      price: 22.80,
      imgLink: "https://via.placeholder.com/150"
    }
  ];
  
  export const tortas: Produto[] = [
    {
      id: 1,
      name: "Torta de Maçã",
      price: 18.90,
      imgLink: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Torta de Limão",
      price: 21.30,
      imgLink: "https://via.placeholder.com/150"
    }
  ];
  
  export const salgados: Produto[] = [
    {
      id: 1,
      name: "Coxinha",
      price: 4.50,
      imgLink: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Esfirra",
      price: 3.20,
      imgLink: "https://via.placeholder.com/150"
    }
  ];
  
  export const bebidasQuentes: Produto[] = [
    {
      id: 1,
      name: "Café",
      price: 3.00,
      imgLink: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Chá",
      price: 2.50,
      imgLink: "https://via.placeholder.com/150"
    }
  ];
  
  export const bebidasGeladas: Produto[] = [
    {
      id: 1,
      name: "Refrigerante",
      price: 4.50,
      imgLink: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Suco Natural",
      price: 5.20,
      imgLink: "https://via.placeholder.com/150"
    }
  ];
  