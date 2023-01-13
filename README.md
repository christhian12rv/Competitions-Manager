<h1 align="center">Gerenciador de Competições</h1>

<!-- Índice -->
<details>
  <summary>Índice</summary>
  <ol>
        <li><a href="#feito-com">Feito com</a></li>
    </li>
    <li>
      <a href="#começando">Começando</a>
      <ul>
        <li><a href="#pré-requisitos">Pré requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
        <li><a href="#rodando-o-projeto">Rodando o projeto</a></li>
      </ul>
    </li>
    <li><a href="#explicação-do-projeto">Explicação do projeto</a></li>
  </ol>
</details>

 <!-- ABOUT THE PROJECT -->
 ## Sobre o projeto
 Esse projeto é um gerenciador de competições, onde é possível adicionar atletas a certas competições e computar o rank de cada competição. O projeto foi criado com **Nodejs**, **Express** e **SQLite** (utilizando **Sequelize**). A arquitetrua usada foi a arquitetura **MVCS (Models Views Controllers Services)**

### Feito com

-   [NodeJS](https://nodejs.org/en/)
-   [Express](https://expressjs.com/)
-   [SQLite](https://www.sqlite.org/index.html)
-   [Sequelize](https://sequelize.org)

<!-- Começando -->

## Começando

### Pré requisitos

#### Node

-   #### Instalação do Node no Windows

    Basta acessar o [site oficial do Node.js](https://nodejs.org/) e baixar o instalador.
    Além disso, certifique-se de ter o `git` disponível em seu PATH, `npm` pode precisar dele (você pode encontrar o git [aqui](https://git-scm.com/)).

-   ##### Instalação do Node no Ubuntu

    Você pode instalar o nodejs e o npm facilmente com o apt install, basta executar os seguintes comandos.

        $ sudo apt install nodejs
        $ sudo apt install npm

-   ##### Outros sistemas operacionais
    Você pode encontrar mais informações sobre a instalação no [site oficial do Node.js](https://nodejs.org/) e no [site oficial do NPM](https://npmjs.org/).

    Se a instalação foi bem-sucedida, você poderá executar o seguinte comando.

        $ node --version
        v16.3.0
    
        $ npm --version
        7.24.0

    Se você precisar atualizar o `npm`, você pode fazê-lo usando o `npm`! Legal, certo? Após executar o seguinte comando,    basta abrir novamente a linha de comando e ser feliz.
    
        $ npm install npm -g



### Instalação

1. Clone o repositório
    ```sh
    git clone https://github.com/hub4future/teste_2_christhian12rv
    ```
2. Instale os pacotes npm
    ```sh
    npm install
    ```

### Rodando o projeto

Primeiro, crie um arquivo .env na raiz do projeto. Em seguida, altere o arquivo .env

```sh
PORT=porta_do_seu_servidor
```

Para executar o projeto, execute

    $ npm start

Para executar o projeto em modo de desenvolvimento execute

    $ npm run dev

Para verificar erros de padrão de código (eslint), execute

    $ npm run lint
    
Para verificar e corrigir erros de padrão de código (eslint), execute

    $ npm run lint:fix

## Explicação do projeto
O projeto tem 8 rotas, sendo 3 rotas POST e 5 rotas GET.

Rotas

**POST /competition** -> Cria uma competição. Deve se passar os dados:

<img width="100%" src="https://github.com/hub4future/teste_2_christhian12rv/blob/master/img/createCompetitionData.png" alt="Dados da criação de uma competição">

Retorno:

<img width="100%" src="https://github.com/hub4future/teste_2_christhian12rv/blob/master/img/createCompetitionReturn.png" alt="Retorno da criação de uma competição">

**POST /athlete** -> Cria um atleta. Deve se passar os dados:

<img width="100%" src="https://github.com/hub4future/teste_2_christhian12rv/blob/master/img/createAthleteData.png" alt="Dados da criação de um atleta">

Retorno:

<img width="100%" src="https://github.com/hub4future/teste_2_christhian12rv/blob/master/img/createAthleteReturn.png" alt="Retorno da criação de um atleta">

**POST /competition/finish/:id** -> Finaliza uma competição. Deve-se passar o id da competição como parâmetro:

<img width="100%" src="https://github.com/hub4future/teste_2_christhian12rv/blob/master/img/finishCompetitionReturn.png" alt="Retorno da finalização de uma competição">

**GET /competition** -> Retorna todas as competições:

<img width="100%" src="https://github.com/hub4future/teste_2_christhian12rv/blob/master/img/competitionsReturn.png" alt="Retorno de todas as competições">

**GET /competition/rank/:id** -> Computa e retorna o rank de todos os atletas de uma competição. Deve-se passar o id da competição como parâmetro:

<img width="100%" src="https://github.com/hub4future/teste_2_christhian12rv/blob/master/img/rankReturn.png" alt="Retorno do rank de atletas de uma competição">

**GET /athlete/:id** -> Retorna todos os atletas de uma competição:

<img width="100%" src="https://github.com/hub4future/teste_2_christhian12rv/blob/master/img/athletesReturn.png" alt="Retorno de todos os atletas de uma competição">

**GET /competition/active** -> Retorna todas as competições ativas (não finalizadas):

<img width="100%" src="https://github.com/hub4future/teste_2_christhian12rv/blob/master/img/finishedCompetitionReturn.png" alt="Retorno de competições finalizadas">

**GET /competition/:id** -> Retorna uma competição. Deve-se passar o id da competição como parâmetro:

<img width="100%" src="https://github.com/hub4future/teste_2_christhian12rv/blob/master/img/competitionReturn.png" alt="Retorno de uma competição">