let container = document.getElementById("container");
let qtdTarefas = document.getElementById("qtdTarefas");
let contadorCategorias = 0; // Para gerar IDs únicos
let contadorTarefa = 0;

function criarCategoria() {
  contadorCategorias++;
  let idUnico = "categoria-" + contadorCategorias;
  let idCorpo = "corpo-" + idUnico;

  let cardCategoria = document.createElement("div");
  cardCategoria.id = idUnico;
  cardCategoria.classList.add("Card_Container");

  // título para identificar a categoria
  let cardTop = document.createElement("div");
  let titulo = document.createElement("h3");
  titulo.innerText = "Categoria " + contadorCategorias;
  cardTop.appendChild(titulo);
  cardCategoria.appendChild(cardTop);

  cardTop.classList.add("cardTop");

  // div tarefas
  let cardMain = document.createElement("div");
  cardMain.classList.add("corpo-tarefas");
  cardMain.id = idCorpo; // ID para a função criarTarefa achar
  cardCategoria.appendChild(cardMain);

  // O BOTÃO DE CRIAR TAREFA
  let cardFotter = document.createElement("div");
  let btnAddTarefa = document.createElement("button");
  btnAddTarefa.innerText = "+ Adicionar Tarefa";
  cardFotter.appendChild(btnAddTarefa);

  // ID único para a função de criar tarefa
  btnAddTarefa.onclick = function () {
    criarTarefa(idCorpo);
  };

  cardCategoria.appendChild(cardFotter);

  cardFotter.classList.add("cardFotter");
  container.appendChild(cardCategoria);
}

function criarTarefa(idDaCategoriaPai) {
  // Agora não buscamos um ID fixo, mas sim o ID que recebemos por argumento
  let categoriaAlvo = document.getElementById(idDaCategoriaPai);

  let containerTarefa = document.createElement("div");
  containerTarefa.classList.add("tarefa");

  let checkbox = document.createElement("input"); // Mudei para input para ser funcional
  checkbox.type = "checkbox";

  let descricao = document.createElement("span");
  descricao.innerText = " Nova Tarefa";

  let deletarTarefa = document.createElement("button"); // Corrigi o erro de "buttton"
  deletarTarefa.innerText = "Remover";
  deletarTarefa.onclick = () => {
    containerTarefa.remove();
    contadorTarefa++;
    qtdTarefas.innerText = contadorTarefa;
  };

  containerTarefa.appendChild(checkbox);
  containerTarefa.appendChild(descricao);
  containerTarefa.appendChild(deletarTarefa);

  // Colocamos a tarefa dentro da categoria específica que clicamos
  categoriaAlvo.appendChild(containerTarefa);
}
