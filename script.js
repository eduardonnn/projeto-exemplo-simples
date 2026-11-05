"use strict";

const CHAVE_ARMAZENAMENTO = "projeto-exemplo-simples:tarefas:v1";
const formulario = document.querySelector("#formulario-tarefa");
const campo = document.querySelector("#nova-tarefa");
const lista = document.querySelector("#lista-tarefas");
const vazio = document.querySelector("#estado-vazio");
const status = document.querySelector("#mensagem-status");
const filtros = document.querySelectorAll("[data-filtro]");

let tarefas = carregarTarefas();
let filtroAtual = "todas";

function carregarTarefas() {
  try {
    const dados = JSON.parse(localStorage.getItem(CHAVE_ARMAZENAMENTO) ?? "[]");
    if (!Array.isArray(dados)) return [];
    return dados.filter((tarefa) =>
      tarefa && typeof tarefa.id === "string" &&
      typeof tarefa.texto === "string" && typeof tarefa.concluida === "boolean"
    );
  } catch {
    return [];
  }
}

function salvarTarefas() {
  try {
    localStorage.setItem(CHAVE_ARMAZENAMENTO, JSON.stringify(tarefas));
  } catch {
    status.textContent = "Não foi possível salvar as tarefas neste navegador.";
  }
}

function criarId() {
  return typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function tarefasFiltradas() {
  if (filtroAtual === "pendentes") return tarefas.filter((tarefa) => !tarefa.concluida);
  if (filtroAtual === "concluidas") return tarefas.filter((tarefa) => tarefa.concluida);
  return tarefas;
}

function atualizarTela() {
  lista.replaceChildren();

  for (const tarefa of tarefasFiltradas()) {
    const item = document.createElement("li");
    item.className = `tarefa${tarefa.concluida ? " concluida" : ""}`;

    const rotulo = document.createElement("label");
    rotulo.className = "rotulo-tarefa";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "caixa-selecao";
    checkbox.checked = tarefa.concluida;
    checkbox.setAttribute("aria-label", `Concluir: ${tarefa.texto}`);
    checkbox.addEventListener("change", () => {
      tarefa.concluida = checkbox.checked;
      salvarTarefas();
      atualizarTela();
      status.textContent = tarefa.concluida ? "Tarefa concluída." : "Tarefa marcada como pendente.";
    });

    const texto = document.createElement("span");
    texto.className = "texto-tarefa";
    texto.textContent = tarefa.texto; // textContent impede inserção de HTML do usuário.
    rotulo.append(checkbox, texto);

    const excluir = document.createElement("button");
    excluir.type = "button";
    excluir.className = "botao-excluir";
    excluir.textContent = "×";
    excluir.setAttribute("aria-label", `Excluir: ${tarefa.texto}`);
    excluir.title = "Excluir tarefa";
    excluir.addEventListener("click", () => {
      tarefas = tarefas.filter((itemAtual) => itemAtual.id !== tarefa.id);
      salvarTarefas();
      atualizarTela();
      status.textContent = "Tarefa excluída.";
    });
    item.append(rotulo, excluir);
    lista.append(item);
  }

  const concluidas = tarefas.filter((tarefa) => tarefa.concluida).length;
  const pendentes = tarefas.length - concluidas;
  const porcentagem = tarefas.length ? Math.round((concluidas / tarefas.length) * 100) : 0;

  document.querySelector("#resumo-texto").textContent = tarefas.length
    ? `${concluidas} de ${tarefas.length} concluídas`
    : "Nenhuma tarefa cadastrada";
  document.querySelector("#quantidade-pendente").textContent = `${pendentes} ${pendentes === 1 ? "pendente" : "pendentes"}`;
  document.querySelector("#progresso-porcentagem").textContent = `${porcentagem}%`;
  document.querySelector("#barra-progresso").style.width = `${porcentagem}%`;
  document.querySelector(".trilha-progresso").setAttribute("aria-valuenow", String(porcentagem));
  document.querySelector("#limpar-concluidas").disabled = concluidas === 0;

  const semResultados = tarefasFiltradas().length === 0;
  vazio.hidden = !semResultados;
  if (semResultados) {
    const mensagens = {
      todas: ["Tudo organizado!", "Adicione uma tarefa para começar."],
      pendentes: ["Nada pendente!", "Você não tem tarefas pendentes."],
      concluidas: ["Nenhuma concluída", "As tarefas finalizadas aparecerão aqui."],
    };
    const [titulo, descricao] = mensagens[filtroAtual];
    document.querySelector("#titulo-vazio").textContent = titulo;
    document.querySelector("#texto-vazio").textContent = descricao;
  }

  filtros.forEach((botao) => {
    const selecionado = botao.dataset.filtro === filtroAtual;
    botao.classList.toggle("ativo", selecionado);
    botao.setAttribute("aria-pressed", String(selecionado));
  });
}

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const texto = campo.value.trim();
  if (!texto) return;
  tarefas.unshift({ id: criarId(), texto, concluida: false });
  salvarTarefas();
  campo.value = "";
  campo.focus();
  atualizarTela();
  status.textContent = "Tarefa adicionada.";
});

filtros.forEach((botao) => {
  botao.addEventListener("click", () => {
    filtroAtual = botao.dataset.filtro;
    atualizarTela();
  });
});

document.querySelector("#limpar-concluidas").addEventListener("click", () => {
  tarefas = tarefas.filter((tarefa) => !tarefa.concluida);
  salvarTarefas();
  atualizarTela();
  status.textContent = "Tarefas concluídas removidas.";
});

atualizarTela();
