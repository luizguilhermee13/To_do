let container = document.getElementById("container");
let qtdTarefas = document.getElementById("qtdTarefas");
let contadorCategorias = 0; // Para gerar IDs únicos
let contadorTarefa = 0;

// Função para o titulo das categorias
function definirNome() {
  let nomeTituloDiv = document.createElement("div");
  nomeTituloDiv.classList.add("titulo_categorias");

  let nomeTituloInput = document.createElement("input");
  nomeTituloInput.type = "text";
  nomeTituloInput.placeholder = "Define o nome da Categoria";

  let nomeTituloBotao = document.createElement("button");
  nomeTituloBotao.innerText = "Salvar Valor";

  nomeTituloDiv.appendChild(nomeTituloInput);
  nomeTituloDiv.appendChild(nomeTituloBotao);

  document.body.appendChild(nomeTituloDiv);

  nomeTituloBotao.onclick = function () {
    let tituloDefinitivo = nomeTituloInput.value;
    nomeTituloDiv.remove();
    criarCategoria(tituloDefinitivo);
  };
}

// Função para criar as categorias,recebendo como parametro o titulo dela definido em definirNome();
function criarCategoria(definirTitulo) {
  contadorCategorias++;
  let idUnico = "categoria -" + contadorCategorias;
  let idCorpo = "corpo-" + idUnico;

  let cardCategoria = document.createElement("div");
  cardCategoria.id = idUnico;
  cardCategoria.classList.add("Card_Container");

  // definindo um header e repassando o nome da categoria no topo de cada categoria
  let cardTop = document.createElement("div");
  let titulo = document.createElement("h3");
  titulo.innerText = definirTitulo;
  cardTop.appendChild(titulo);
  cardCategoria.appendChild(cardTop);
  cardTop.classList.add("cardTop");

  // criando um espaço no meio para colocar as tarefas
  let cardMain = document.createElement("div");
  cardMain.classList.add("corpo-tarefas");
  cardMain.id = idCorpo; // ID para a função criarTarefa achar o container da categoria
  cardCategoria.appendChild(cardMain);

  // O BOTÃO DE CRIAR TAREFA
  let cardFotter = document.createElement("div");
  let btnAddTarefa = document.createElement("button");
  btnAddTarefa.innerText = "Adicionar Tarefa";
  cardFotter.appendChild(btnAddTarefa);

  //no botao chamo a função criar tarefa usando o ID único/corpo para a função de criar tarefa saber o container que ela deve ser incluida
  btnAddTarefa.onclick = function () {
    criarTarefa(idCorpo);
  };

  cardCategoria.appendChild(cardFotter);
  cardFotter.classList.add("cardFotter");
  container.appendChild(cardCategoria);
}

// Função para criar a tarefas dentro das categorias, usando os ID do corpo das categorias como parametro
function criarTarefa(idDaCategoriaPai) {
  let categoriaAlvo = document.getElementById(idDaCategoriaPai);
  let textoTarefa = prompt("Qual o nome da tarefa?"); // chama um prompt para definir o nome da tarefa

  //criando uma div e colocando checkbox,spa(nome da tarefa) e um botão para remover e contabilizar tarefas feitas
  let containerTarefa = document.createElement("div");
  containerTarefa.classList.add("tarefa");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  let descricao = document.createElement("span");
  descricao.innerText = textoTarefa;

  let deletarTarefa = document.createElement("button");
  deletarTarefa.innerText = "Remover"; //atraves so botão eu removo a tarefa utilizando a função abaixo
  deletarTarefa.onclick = () => {
    containerTarefa.remove();
    contadorTarefa++;
    qtdTarefas.innerText = contadorTarefa; //contabilizo a quantidade e tarefa concluidas
  };

  containerTarefa.appendChild(checkbox);
  containerTarefa.appendChild(descricao);
  containerTarefa.appendChild(deletarTarefa);

  // Colocamos a tarefa dentro da categoria específica que clicamos
  categoriaAlvo.appendChild(containerTarefa);
}
