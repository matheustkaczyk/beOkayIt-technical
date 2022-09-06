# Be Okay IT - Teste técnico

### Projeto de uma API em Nest.js, que contempla banco de dados utilizando TypeORM.

---

## Visão Geral

##### Projeto de uma API em Nest.js, contempla um CRUD de empresas e feriados, nas quais são usadas para precificar serviços com base em dias trabalháveis.

##### Bibliotecas:

- [Nest.js](http://nestjs.com/) v^9.0.11 - Framework
- [Node.js](https://nodejs.org) v^16.17.0 - Runtime
- [TypeORM](https://typeorm.io/) v0.3.9 - ORM Banco de dados

## **Sumário**

- [Pré Requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Contexto e Regras de Negócio](#contexto-e-regras-de-negócio)
- [Rotas | Endpoints](#rotas-|-endpoints)
- [Próximos passos](#próximos-passos)
- [Sobre o autor](#sobre-o-autor)

---

## **Pré requisitos**

Para rodar esse projeto é necessário ter instalado em sua máquina o runtime Node.js e o gerenciador de pacotes NPM.

---

## **Instalação**

### Utilização local

1. Você pode baixar o projeto em sua máquina utilizando o comando:

   **`git@github.com:matheustkaczyk/beOkayIt-technical.git`**

2. Entre na pasta do projeto digitando o comando **`cd beOkayIt-technical`**

3. Instale as dependências do projeto digitando **`npm install`** em seu terminal

4. Para rodar a aplicação digite **`npm run start`** em seu terminal

## **Contexto**

O contexto dessa API foi prover uma estrutura para cadastro de empresas e ter o controle dos feriados e dias úteis para a precificação de serviços.
---

## **Rotas | Endpoints**

### POST - Cadastrar uma empresa
```json
{
  "nome": string,
  "cnpj": string,
  "data_fundacao": string,
  "valor_hora": number
}
```

---
## **Sobre o autor**

Obrigado por ter lido até aqui!

Eu me chamo Matheus, e sou desenvolvedor web fullstack. Comecei meus estudos no ano de 2020 e estou me apaixonando cada dia que passa, através dos estudos, por tecnologia e desenvolvimento. Esse projeto e esse README foram desenvolvidos como um desafio pessoal. Eu empenhei muito carinho na construção de cada linha.

[Você pode olhar mais dos meus repositórios aqui](https://github.com/matheustkaczyk)

[Ou se conectar comigo no linkedin!](https://www.linkedin.com/in/matheustkaczykribeiro/)
