const Pool = require('pg').Pool
const db = new Pool({
    host: 'localhost',
    database:'gaiacup_db',
    user:'postgres',
    password: 'senai',
    port:5432
})

const getUsuario = (request, response) => {
    db.query('SELECT * FROM usuario ORDER BY id_usuario ASC',
    (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getEquipe = (request, response) => {
    db.query('SELECT * FROM equipe ORDER BY id_equipe ASC',
    (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getPartida = (request, response) => {
    db.query('SELECT * FROM partida ORDER BY id_partida ASC',
    (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getVoto = (request, response) => {
    db.query('SELECT * FROM voto ORDER BY id_voto ASC',
    (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getVotacao = (request, response) => {
    db.query('SELECT * FROM votacao ORDER BY id_partida ASC',
    (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getUsuarioById = (request, response) => {
    const id = parseInt(request.params.id)

    db.query('SELECT * FROM usuario WHERE id_usuario = $1', [id],
    (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getEquipeById = (request, response) => {
    const id = parseInt(request.params.id)

    db.query('SELECT * FROM equipe WHERE id_equipe = $1', [id],
    (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getPartidaById = (request, response) => {
    const id = parseInt(request.params.id)

    db.query('SELECT * FROM partida WHERE id_partida = $1', [id],
    (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getVotoById = (request, response) => {
    const id = parseInt(request.params.id)

    db.query('SELECT * FROM voto WHERE id_voto = $1', [id],
    (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getVotacaoById = (request, response) => {
    const id = parseInt(request.params.id)

    db.query('SELECT * FROM voto WHERE id_partida = $1', [id],
    (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUsuario = (request, response) => {
    try{
        const {senha, email, nome} = request.body

        db.query('INSERT INTO usuario(senha, moeda, email, nome) VALUES($1, $2, $3, $4)',
        [senha, 200, email, nome], (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send('Usuario adicionado')
        })
    }catch(error){
        console.log('Erro: ' + error)
        response.status(400).send({
            status:400,
            message:'Error ao inserir o registro. ' + error
        })
    }
}

// const getTaskById = (request, response) => {
//     const id = parseInt(request.params.id)

//     db.query('SELECT * FROM task WHERE id = $1', [id],
//     (error, results) => {
//         if(error){
//             throw error
//         }
//         response.status(200).json(results.rows)
//     })
// }

// const createTask = (request, response) => {
//     try{
//         const {descricao, data_tarefa} = request.body

//         db.query('INSERT INTO task(descricao, data_tarefa) VALUES($1, $2)',
//         [descricao, data_tarefa], (error, results) => {
//             if (error) {
//                 throw error
//             }
//             response.status(201).send('Tarefa adicionada')
//         })
//     }catch(error){
//         console.log('Erro: ' + error)
//         response.status(400).send({
//             status:400,
//             message:'Error ao inserir o registro. ' + error
//         })
//     }
// }

// const updateTask = (request, response) => {
//     const id = parseInt(request.params.id)
//     const {descricao, data_tarefa} = request.body

//     db.query('UPDATE task SET descricao = $1, data_tarefa = $2 WHERE id = $3',
//     [descricao, data_tarefa, id], (error, results) => {
//         if (error) {
//             throw error
//         }
//         response.status(201).send('Tarefa atualizada')
//     })
// }

// const deleteTask = (request, response) => {
//     const id = parseInt(request.params.id)

//     db.query('DELETE FROM task WHERE id = $1', [id],
//     (error, results) => {
//         if (error) {
//             throw error
//         }
//         response.status(201).send('Tarefa deletada')
//     })
// }

module.exports = {
    getUsuario,
    getEquipe,
    getPartida,
    getVoto,
    getVotacao,
    getUsuarioById,
    getEquipeById,
    getPartidaById,
    getVotoById,
    getVotacaoById,
    createUsuario
    // getTaskById,
    // createTask,
    // updateTask,
    // deleteTask
}