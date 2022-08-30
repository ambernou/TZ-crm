const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const cors = require('cors')
const axios = require('axios')

const app = express()

app.use(cors)
app.use(express.json())
//app.use('/', serveStatic(path.join(__dirname, 'vue-crm', 'dist')))
app.use(express.urlencoded({ extended: true }))

app.post('/crm', (req, res) => {
    console.log('запрос', req.url)
    // res.send(await axios.get('https://ambernou.amocrm.ru/api/v4/leads', { headers: { "Authorization" : "Bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImU5YWI0YmU3ODg4YTMxMWQzZDA5MmRmZGI5ZjY1MDRmMmQ1MDA4MjI0M2M4N2QzY2I3MDA0MGRjYjRmMGIzODEyZDZiYWE0MmZmOGJlNjFlIn0.eyJhdWQiOiJkNmQ4OWIxMS04MWNlLTRkZGUtYjU5Yy1iZjQwZGZjMGFlZWIiLCJqdGkiOiJlOWFiNGJlNzg4OGEzMTFkM2QwOTJkZmRiOWY2NTA0ZjJkNTAwODIyNDNjODdkM2NiNzAwNDBkY2I0ZjBiMzgxMmQ2YmFhNDJmZjhiZTYxZSIsImlhdCI6MTY2MTg1MDYwNCwibmJmIjoxNjYxODUwNjA0LCJleHAiOjE2NjE5MzcwMDQsInN1YiI6Ijg1MDM4OTEiLCJhY2NvdW50X2lkIjozMDM2NjE2OSwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImNybSIsIm5vdGlmaWNhdGlvbnMiXX0.riiBsaTZxdjjxS3WeXMQJxd90ELw4LX1cYlpwpKsW3VnpcdlTU2fhBEXMZ4gTrEDFwy8C_UK9NEzml6itrw3-8byivgQaMaEcAR46UwFJEo7JBeBEOqSjjXRsTg-43EdTUb0u3MI96wrj91jAlwwaLDQ5eHKN0G1-kLcD8Fk8FAn4jgNNlv7jwyHkPXglkN3lYHgs8AflIKMt6N8Gu6dE5iICsoS9KmLDn8iGdFRj8wj5aD23Fmyr0o_5YNWQPVZVppEmqjqwhX8T9UuYGobLLs-gTg_hBa4e7qBkGeCUl9YMmtxn8s0ZE-LToukj1JeV3RlY5mdmOYi3bhIWbAjdQ"}})
    //     .then(response => {
    //         console.log('response ', response.data)
    //         return response    
    //     })
    // )
    res.send('answer')
})

const port = 3000

app.listen(port)