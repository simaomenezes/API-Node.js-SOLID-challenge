# API-Node.js-SOLID-challenge
Desafio referente ao módulo: API Node.js com SOLID

Nesse desafio desenvolveremos uma API para a adoção de animais, a FindAFriend API, utilizando SOLID e testes.

Here link to challenge:
https://efficient-sloth-d85.notion.site/Desafio-03-0b927eb32dbd4f21ab40224ffdf6cf19

# App

FindAFriend.

## RFs (Requisitos funcionais)

- Deve ser possível cadastrar um pet
- Deve ser possível listar todos os pets disponíveis para adoção em uma cidade
- Deve ser possível filtrar pets por suas características
- Deve ser possível visualizar detalhes de um pet para adoção
- Deve ser possível se cadastrar como uma ORG
- Deve ser possível realizar login como uma ORG

## RNs (Regras de negócio)

- Para listar os pets, obrigatoriamente precisamos informar a cidade
- Uma ORG precisa ter um endereço e um número de WhatsApp
- Um pet deve estar ligado a uma ORG
- O usuário que quer adotar, entrará em contato com a ORG via WhatsApp
- Todos os filtros, além da cidade, são opcionais
- Para uma ORG acessar a aplicação como admin, ela precisa estar logada

## RNFs (Requisitos não-funcionais)

## Entity
- Pet
- City
- Org
- User



## OBS:

docker
 - docker compose up -d

prisma:
- npx prisma generate
- npx prisma migrate dev
npm run start:dev




