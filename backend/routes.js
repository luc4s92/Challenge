const express = require('express')
const routes = express.Router() 

routes.get('/', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM budgets', (err, rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        console.log(req.body)
        conn.query('INSERT INTO budgets set ?' ,[req.body], (err, rows) => {
            if(err) return res.send(err)

            res.json('Budget inserted! ')
        })
    })
})

routes.delete('/:id', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        console.log(req.body)
        conn.query('DELETE FROM budgets WHERE id = ?' ,[req.params.id], (err, rows) => {
            if(err) return res.send(err)

            res.json('Budget deleted! ')
        })
    })
})

routes.put('/:id', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        console.log(req.body)
        conn.query('UPDATE budgets set ? WHERE id = ?' ,[req.body, req.params.id], (err, rows) => {
            if(err) return res.send(err)

            res.json('Budget UPDATED! ')
        })
    })
})

module.exports = routes