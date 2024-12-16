import axios from 'axios';

export async function getProducts() {
  const url = 'https://sheets.googleapis.com/v4/spreadsheets/14f4xK_L6C25Meyvf6wWgekD5_xxLac-z0tTV0PrYjNQ/values/2:99?key=AIzaSyBk89LG2STO_hBF9LyIipLcwXK4YOYqEsM';
  
  try {
    // Fazendo a requisição para a URL
    const response = await axios.get(url);

    // Extraindo apenas os 'values' do objeto retornado
    const dataValues = response.data.values;

    console.log(dataValues); // Exibe os valores no console
    return dataValues;       // Retorna os valores
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    return null;
  }
}

