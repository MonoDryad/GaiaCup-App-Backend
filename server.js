const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000
const routes = require('./src/queries')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        // padrão principal é string ou array = false
        extended:true
    })
)

app.get('/', (request,response) => {
    response.json({info:'SERVIDOR - Gaia Cup'})
})

app.get('/gaiacup/usuario', routes.getUsuario)
app.get('/gaiacup/equipe', routes.getEquipe)
app.get('/gaiacup/partida', routes.getPartida)
app.get('/gaiacup/voto', routes.getVoto)
app.get('/gaiacup/votacao', routes.getVotacao)
app.get('/gaiacup/usuario/:id', routes.getUsuarioById)
app.get('/gaiacup/equipe/:id', routes.getEquipeById)
app.get('/gaiacup/partida/:id', routes.getPartidaById)
app.get('/gaiacup/voto/:id', routes.getVotoById)
app.get('/gaiacup/votacao/:id', routes.getVotacaoById)
app.post('/gaiacup/usuario', routes.createUsuario)


app.listen(PORT, () => {
    console.log(`Server is running in https://localhost:${PORT}`)
})
