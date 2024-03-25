let ul = document.getElementById("ul");
let animeLi = document.getElementById("anime");
let personagemLi = document.getElementById("personagem");
let citacaoLi = document.getElementById("citacao");
let res = document.getElementById("res");

const url = "https://animechan.xyz/api/random/character?name=";

document.getElementById("ul").style.display = "none";

let input = document.getElementById("input").value;

const validationInput = (input) => {
  return new Promise((resolve, reject) => {
    if (input.trim() === "") {
      document.getElementById("ul").style.display = "none";
      res.innerHTML += "<p>Insira um nome no campo de busca!</p>";
      reject("Empty field");
    } else {
      resolve(input);
    }
  });
};

document.getElementById("btn-Buscar").addEventListener("click", async () => {
  input = document.getElementById("input").value;
  try {
    res.innerHTML = "";
    animeLi.innerHTML = "";
    personagemLi.innerHTML = "";
    citacaoLi.innerHTML = "";

    await validationInput(input);
    console.log("Syntax error in line 127");
    const response = await fetch(url + input);
    const data = await response.json();

    if (data.anime === undefined && data.character === undefined) {
      res.innerHTML += "<p>Personagem não encontrado!</p>";
    } else {
      document.getElementById("ul").style.display = "";
      animeLi.innerHTML += `<p>Anime:<br>${data.anime}</p>`;
      personagemLi.innerHTML += `<p>Personagem:<br>${data.character}</p>`;
      citacaoLi.innerHTML += `<p>Citação:${data.quote}</p>`;
    }
  } catch (error) {
    console.error("Erro ao solicitar dados da API:", error);
  }
});
