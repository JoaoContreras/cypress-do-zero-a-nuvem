 ## Requisitos

Node.js (recomendo 16+)

npm ou pnpm

Cypress instalado nas dependências do projeto

## Instalação
git clone <url-do-repo>
cd <nome-do-repo>
npm install
# ou
pnpm install


## Scripts sugeridos (package.json)

  "scripts": {
  "cy:open": "cypress open",
  "cy:open:mobile": "cypress open --config viewportWidth=410 viewportHeight=860",
  "test": "cypress run",
  "test:mobile":"cypress run --config viewportWidth=410 viewportHeight=860"
  },