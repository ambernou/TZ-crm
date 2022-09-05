const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const cors = require('cors')
const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()
const app = express()

const token = `Bearer ${process.env.ACCESS_TOKEN}`

app.use(cors())
app.use(express.json())
//app.use('/', serveStatic(path.join(__dirname, 'vue-crm', 'dist')))
app.use(express.urlencoded({ extended: true }))

app.get('/crm', async (req, res) => {
    console.log('запрос', req.url)
    res.send(await axios.get('https://ambernou.amocrm.ru/api/v4/leads', { headers: { "Authorization" : token}})
        .then(response => {
            // console.log('response ', response.data._embedded.leads)
            return response.data    
        })
    )
})

app.get('/query', async (req, res) => {
    console.log('поисковый запрос', req.url)
    const query = req.body
    res.send(await axios.get(`https://ambernou.amocrm.ru/api/v4/leads/${query}`, { headers: { "Authorization" : token}})
        .then(response => {
            // console.log('response ', response.data._embedded.leads)
            return response.data    
        })
    )
})

const port = 3000

app.listen(port)