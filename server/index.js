// const http = require("http")
const express = require('express')
const cors = require('cors')
const app = express()
// app.use(express.json())
app.use(cors())

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2022-05-30T17:30:31.098Z",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only Javascript",
        date: "2022-05-30T18:39:34.091Z",
        important: false
    },
    {
        id: 6,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2022-05-30T19:20:14.298Z",
        important: true
    }
]
app.get('/', (request, response) => {
    response.send('<h1>hello World </h1>')
})
app.get('/api/notes', (request, response) => {
    const note = request.body
    console.log(note)
    response.json(notes)
})
app.get('/api/notes/:id', (request, response) => {

    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
  
    response.status(204).end()
  })

  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })

// const app = http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'text/plain'})
//     response.end(JSON.stringify(notes))
// })
// const PORT = 3001
// app.listen(PORT)
// console.log(`Server running on port${PORT}`)