const express = require("express")

const app = express()

const PORT = 3333

app.get("/message/:id/:user", (request, response) => {
  const { id, user } = request.params;

  response.send(`
    Id do usuário: ${id}
    Nome do usuário: ${user}
  `)
})

app.get("/users", (request, response) => {
  const { page, limits } = request.query

  response.send(`
   Pagina: ${page}.
   Limit: ${limits}.
  `)
})

app.listen(PORT, () => console.log(`O server está rodando na porta: ${PORT}`))