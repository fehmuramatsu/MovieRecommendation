// Array contendo os dados dos filmes e suas respectivas características (violência, ação, romance, comédia)
const movies = [
  {
    name: "De Volta Para o Futuro (1985)",
    violence: 0.2,
    action: 0.5,
    romance: 0.3,
    comedy: 0.9,
  },
  {
    name: "Star Wars: Episódio IV – Uma Nova Esperança (1977)",
    violence: 0.5,
    action: 0.9,
    romance: 0.3,
    comedy: 0.5,
  },
  {
    name: "E.T. O Extraterrestre (1982)",
    violence: 0.3,
    action: 0.4,
    romance: 0.5,
    comedy: 0.6,
  },
  {
    name: "O Expresso Polar (2004)",
    violence: 0.0,
    action: 0.2,
    romance: 0.1,
    comedy: 0.3,
  },
  {
    name: "Forrest Gump (1994)",
    violence: 0.1,
    action: 0.2,
    romance: 0.8,
    comedy: 0.4,
  },
  {
    name: "Wall-E (2008)",
    violence: 0.0,
    action: 0.5,
    romance: 0.5,
    comedy: 0.5,
  },
  {
    name: "O Hobbit: Uma Jornada Inesperada (2012)",
    violence: 0.8,
    action: 0.9,
    romance: 0.4,
    comedy: 0.2,
  },
  {
    name: "As Crônicas de Nárnia (2005)",
    violence: 0.3,
    action: 0.5,
    romance: 0.4,
    comedy: 0.2,
  },
  {
    name: "Esqueceram de Mim (1990)",
    violence: 0.1,
    action: 0.2,
    romance: 0.1,
    comedy: 0.8,
  },
  {
    name: "Klaus (2019)",
    violence: 0.0,
    action: 0.5,
    romance: 0.4,
    comedy: 0.7,
  },
  {
    name: "O Rei Leão (1994)",
    violence: 0.1,
    action: 0.5,
    romance: 0.4,
    comedy: 0.6,
  },
  {
    name: "Irmão Urso (2003)",
    violence: 0.2,
    action: 0.7,
    romance: 0.2,
    comedy: 0.8,
  },
  {
    name: "O Gigante de Ferro (1999)",
    violence: 0.0,
    action: 0.7,
    romance: 0.1,
    comedy: 0.8,
  },
  {
    name: "Interestelar (2014)",
    violence: 0.4,
    action: 0.8,
    romance: 0.3,
    comedy: 0.1,
  },
];

// Adds an event to the movie recommendation form that occurs when the user clicks "Submit"
// Adiciona um evento ao formulário de recomendação de filmes que ocorre quando o usuário clica em "Submit"
document.getElementById("movie-form").addEventListener("submit", function (e) {
  // Prevents the default form submission behavior (page reload)
  // Impede o comportamento padrão de envio do formulário (recarregar a página)
  e.preventDefault();

  // Get the values ​​entered by the user in the input fields (violence, action, romance, comedy)
  // Obtém os valores inseridos pelo usuário nos campos de entrada (violência, ação, romance, comédia)
  const violence = parseFloat(document.getElementById("violence").value);
  const action = parseFloat(document.getElementById("action").value);
  const romance = parseFloat(document.getElementById("romance").value);
  const comedy = parseFloat(document.getElementById("comedy").value);

  // Creates an object containing the user's preferences
  // Cria um objeto contendo as preferências do usuário
  const userPrefs = { violence, action, romance, comedy };

  // Call function to get recommended movie based on user preferences
  // Chama a função para obter o filme recomendado com base nas preferências do usuário
  const recommendedMovie = getRecommendedMovie(userPrefs);

  // Displays the name of the recommended movie on the page
  // Exibe o nome do filme recomendado na página
  document.getElementById("movie-name").textContent = recommendedMovie.name;
});

// Function that calculates the distance between user preferences and movies using the Euclidean distance formula
// Função que calcula a distância entre as preferências do usuário e os filmes usando a fórmula de distância euclidiana
function getRecommendedMovie(userPrefs) {
  // Variables to store the closest movie (with the smallest distance) and the smallest distance found
  // Variáveis para armazenar o filme mais próximo (com a menor distância) e a menor distância encontrada
  let nearestMovie = null;
  let nearestDistance = Infinity; // We initialize the distance to infinity to ensure that any film is smaller | Inicializamos a distância como infinito para garantir que qualquer filme seja menor

  //
  // Itera sobre todos os filmes disponíveis no array `movies`
  movies.forEach((movie) => {
    // Calculates the Euclidean distance between movie features and user preferences
    // Calcula a distância euclidiana entre as características do filme e as preferências do usuário
    const distance = Math.sqrt(
      Math.pow(movie.violence - userPrefs.violence, 2) +
        Math.pow(movie.action - userPrefs.action, 2) +
        Math.pow(movie.romance - userPrefs.romance, 2) +
        Math.pow(movie.comedy - userPrefs.comedy, 2)
    );

    //
    // Se a distância calculada for menor que a menor distância encontrada até agora, atualizamos a menor distância e o filme mais próximo
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestMovie = movie; // Atualiza o filme recomendado para o atual
    }
  });

  //
  // Retorna o filme mais próximo (com a menor distância)
  return nearestMovie;
}
