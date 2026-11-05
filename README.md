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

## Execução rápida no Windows (PowerShell)

Abra o **PowerShell** ou o terminal do **Visual Studio Code** e copie estes comandos, um de cada vez:

```powershell
git clone https://github.com/eduardonnn/projeto-exemplo-simples.git
cd projeto-exemplo-simples
start index.html
```

**Explicação:**

- `git clone ...`: baixa uma cópia completa dos arquivos e do histórico do projeto do GitHub para o seu computador.
- `cd projeto-exemplo-simples`: entra na pasta que foi criada.
- `start index.html`: abre o aplicativo no navegador padrão do Windows.

**Atenção:** o `git clone` é usado apenas na primeira vez. Se você já possui a pasta clonada, abra o terminal nela e use `git pull` para trazer as alterações mais recentes do GitHub. O comando `start` é específico do Windows/PowerShell.

### Para explicar o projeto na atividade

O sistema é uma lista de tarefas feita em HTML, CSS e JavaScript. O HTML organiza os elementos da página, o CSS define a aparência e o JavaScript controla a inclusão, conclusão, exclusão e filtragem de tarefas. O `localStorage` guarda as tarefas no próprio navegador para que continuem disponíveis após atualizar a página. O Git controla as versões do código, enquanto o GitHub disponibiliza o repositório para consulta e entrega do trabalho.

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

