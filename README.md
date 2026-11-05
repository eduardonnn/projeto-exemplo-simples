# Minha Lista — Projeto Exemplo Simples

Aplicação web de **gerenciamento de tarefas**, desenvolvida para demonstrar a organização e a publicação de um projeto no GitHub como atividade acadêmica do curso de **Análise e Desenvolvimento de Sistemas (ADS)**.

## Funcionalidades

- Adicionar tarefas com uma descrição.
- Marcar ou desmarcar tarefas como concluídas.
- Filtrar por **todas**, **pendentes** e **concluídas**.
- Excluir uma tarefa ou limpar todas as concluídas.
- Acompanhar o progresso com contador e barra visual.
- Manter as tarefas salvas no próprio navegador com `localStorage`.
- Interface responsiva, compatível com computador e celular.

## Tecnologias

- **HTML5:** estrutura e formulários da página.
- **CSS3:** apresentação e adaptação a diferentes telas.
- **JavaScript:** interação com a lista e armazenamento dos dados.

O projeto não utiliza frameworks, banco de dados nem dependências externas.

## Como executar

1. Faça o download do repositório pelo botão **Code → Download ZIP** e extraia os arquivos, ou clone pelo Git:

   ```bash
   git clone https://github.com/eduardonnn/projeto-exemplo-simples.git
   ```

2. Entre na pasta `projeto-exemplo-simples`.
3. Abra o arquivo `index.html` em um navegador atualizado.
4. Digite uma tarefa, clique em **Adicionar** e experimente os filtros.

Não é necessário instalar Node.js ou configurar um servidor.

## Estrutura do projeto

```text
projeto-exemplo-simples/
├── index.html     # Página principal
├── style.css      # Estilos e responsividade
├── script.js      # Lógica e armazenamento
├── .gitignore     # Arquivos ignorados pelo Git
└── README.md      # Documentação
```

## Observações

- Os dados ficam armazenados somente no navegador e dispositivo em uso.
- Não existe autenticação nem sincronização entre computadores.
- Apagar os dados do site no navegador pode remover as tarefas cadastradas.

## Objetivo da atividade

Praticar a criação e documentação de um projeto, o versionamento com Git e a disponibilização pública do código-fonte em um repositório GitHub.

**Repositório:** https://github.com/eduardonnn/projeto-exemplo-simples
