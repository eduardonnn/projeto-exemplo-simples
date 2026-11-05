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

## Como baixar o projeto na Área de Trabalho (CMD)

**Requisito:** ter o Git instalado no Windows.

1. Abra o **Prompt de Comando (CMD)**.
2. Copie e execute este comando único para criar a pasta do projeto diretamente na **Área de Trabalho**:

```bat
cd /d "%USERPROFILE%\Desktop" && git clone https://github.com/eduardonnn/projeto-exemplo-simples.git
```

3. Para entrar na pasta e abrir a aplicação no navegador, execute:

```bat
cd projeto-exemplo-simples && start index.html
```

**Explicação dos comandos:**

- `cd /d "%USERPROFILE%\Desktop"`: acessa a Área de Trabalho do usuário no Windows.
- `&&`: executa o próximo comando somente se o anterior funcionar.
- `git clone ...`: baixa os arquivos e o histórico do projeto do GitHub, criando a pasta `projeto-exemplo-simples`.
- `cd projeto-exemplo-simples`: entra na pasta do projeto.
- `start index.html`: abre o site no navegador padrão.

**Observação:** faça o `git clone` apenas uma vez. Se a pasta já existir na Área de Trabalho, entre nela pelo CMD e execute `git pull` para atualizar o código. Se a Área de Trabalho estiver redirecionada para o OneDrive, utilize o caminho real dessa pasta.

Não precisa instalar Node.js, baixar bibliotecas ou configurar servidores.

## Explicação do projeto para a atividade

O projeto é uma **lista de tarefas** desenvolvida com HTML, CSS e JavaScript. O **HTML** estrutura os elementos, o **CSS** define a aparência e a responsividade, e o **JavaScript** permite adicionar, marcar, filtrar e excluir tarefas. As informações ficam salvas no próprio navegador pelo **localStorage**.

O **Git** registra as versões dos arquivos e permite clonar o projeto. O **GitHub** hospeda o repositório público e facilita o compartilhamento do código e sua entrega para avaliação.

## Estrutura do projeto

```text
projeto-exemplo-simples/
├── index.html     # Página principal
├── style.css      # Estilos e responsividade
├── script.js      # Lógica e armazenamento
├── .gitignore     # Arquivos ignorados pelo Git
└── README.md      # Documentação
```

## Repositório público

https://github.com/eduardonnn/projeto-exemplo-simples
