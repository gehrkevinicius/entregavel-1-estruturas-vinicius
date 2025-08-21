const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/*
1) Crie uma função com uma closure para fazer com que o endereço /random
devolva numeros aleatorios na seguinte lógica:
- Você deve gerar números aleatórios inteiros entre 0 e 10
- Guarde o último número aleatório gerado em um estado dentro da closure
- A função interna, quando invocada, deve retornar um objeto no seguinte formato:
{ ultimoNumero: N_AQUI: numeroAtual: N_AQUI }
Acesse a página /random e atualize-a para testar sua lógica
*/

app.get("/random", (req, res) => {
  res.render("random", {
    /* --> */ ultimoNumero: 0,
    numeroAtual: 0 /* <-- Valores aqui */,
  });
});

/*
2) Crie uma função recursiva para inverter uma palavra
- A palavra que deve ser invertida chegará na variável "palavraParaInverter"
- A palavra que você inverteu deve ser passada para a variável "invertida"
Seu programa deve funcionar de modo que, ao acessar o endereço /random,
você deve ser capaz de digitar uma palavra, apertar o botão de enviar e
receber a palavra invertida no alert.
*/
app.get("/inverter", (req, res) => {
  res.render("inverter");
});

app.get("/api/inverter/:palavraParaInverter", (req, res) => {
  const palavraParaInverter = req.params.palavraParaInverter;
  const invertida = "PALAVRA_INVERTIDA_AQUI";
  res.json(invertida);
});

/*
3) A função pegaCorDeFundo é uma função de alta ordem que recebe três funções como parâmetro:
- pegaVermelho: retorna a faixa de vermelho da cor aleatória, deve retornar um inteiro entre 0 e 255
- pegaVerde: pegaVerde: retorna a faixa de verde da cor aleatória, deve retornar um inteiro entre 0 e 255
- pegaAzul: retorna a faixa de azul da cor aleatória, deve retornar um inteiro entre 0 e 255
Utilizando essas funções, pegaCorDeFundo retorna uma string no formato: rgb(n, n, n), que
é então passada para o endereço /cores como cor de fundo.
No entanto, esse código está com erro, pois as funções anteriores não foram implementadas.
Você deve então implementá-las para corrigir o programa, de modo /cores deve mostrar uma cor aleatória a cada acesso.
*/
function pegaCorDeFundo(pegaVermelho, pegaVerde, pegaAzul) {
  const r = pegaVermelho();
  const g = pegaVerde();
  const b = pegaAzul();
  return `rgb(${r}, ${g}, ${b})`;
}

// Crie as funções abaixo

// Crie as funções acima

app.get("/cores", (req, res) => {
  // Descomentar e corrigir aqui!
  const corDeFundo = ""; //pegaCorDeFundo(pegaVermelho, ...;
  res.render("cores", { corDeFundo });
});

/*
4) Utilize a função map (obrigatório) e o que mais for necessário
para implementar o seguinte comportamento:
- Ao acessar /dobrar, você também deve passar dois números: início e fim,
da seguinte forma: /dobrar/5/10, por exemplo
- Esses valores chegam nas variáveis "inicio" e "fim"
- Deste modo, você deve fazer com que ao acessar a página,
mostre na tela os dobros dos números entre o início e o fim
- Partindo do exemplo anterior, você deve retornar [10, 12, 14, 16, 18, 20],
que são os dobros de [5, 6, 7, 8, 9, 10]
É OBRIGATÓRIO UTILIZAR A FUNÇÃO MAP
*/
app.get("/dobros/:inicio/:fim", (req, res) => {
  const inicio = req.params.inicio;
  const fim = req.params.fim;
  const dobros = []; // Dobros aqui;
  res.render("dobros", { dobros: dobros.join(", ") });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
