# QuickTask

**QuickTask** é um gerenciador de tarefas simples e eficiente, desenvolvido para ajudar você a organizar suas tarefas diárias de maneira rápida e prática.

## Índice

-   [Sobre o Projeto](#sobre-o-projeto)
-   [Funcionalidades](#funcionalidades)
-   [Tecnologias Utilizadas](#tecnologias-utilizadas)
-   [Como Utilizar](#como-utilizar)
-   [Instalação](#instalação)
-   [Contribuição](#contribuição)
-   [Licença](#licença)

## Sobre o Projeto

O **QuickTask** é uma aplicação web focada em permitir a criação, edição e remoção de tarefas de forma intuitiva. Ele também salva as tarefas no armazenamento local do navegador, garantindo que suas tarefas estejam sempre acessíveis, mesmo se a página for recarregada.

## Funcionalidades

-   Adicionar novas tarefas
-   Editar tarefas existentes
-   Marcar tarefas como concluídas
-   Remover tarefas
-   Persistência de dados utilizando o `localStorage`
-   Interface amigável e responsiva

## Tecnologias Utilizadas

-   **HTML5**: Estrutura da aplicação.
-   **CSS3**: Estilização da interface, utilizando `CSS Grid` e `Flexbox` para responsividade.
-   **JavaScript**: Lógica de manipulação das tarefas.
-   **FontAwesome**: Ícones usados para botões e status das tarefas.

## Como Utilizar

1. Acesse a página do **QuickTask** em seu navegador.
2. Digite o nome da tarefa no campo "Adicionar nova tarefa" e clique no botão "+" para adicioná-la.
3. Você pode editar ou excluir uma tarefa clicando nos ícones de edição (✏️) ou remoção (🗑️).
4. Ao concluir uma tarefa, clique no ícone de check (✔️) para marcá-la como concluída.
5. Suas tarefas serão salvas automaticamente no `localStorage`, garantindo que elas estejam disponíveis após recarregar a página.

## Instalação

Se deseja rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:

    ```bash
    git clone https://github.com/0Carvalh0/quicktask.git
    ```

2. Acesse o diretório do projeto::

    ```bash
    cd quicktask
    ```

3. Abra o arquivo index.html no seu navegador.

    ```bash
    open index.html
    ```

## Contribuição

Contribuições são sempre bem-vindas! Se você tiver ideias para melhorar o projeto, fique à vontade para abrir uma **issue** ou enviar um **pull request**.

### Para contribuir

1. Faça um fork do repositório.

2. Crie uma nova branch para suas alterações:

    ```bash
    git checkout -b feature/nome-da-feature
    ```

3. Faça suas alterações e commit:

    ```bash
    git commit -m "Adicionando nova funcionalidade"
    ```

4. Envie suas alterações:

    ```bash
    git push origin feature/nome-da-feature
    ```

5. Abra um pull request.

## Licença

Este projeto está licenciado sob os termos da licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
