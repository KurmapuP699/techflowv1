const express = require('express')
const app = express()
const PORT = 5000

app.get("/api", (req, res) => {
    res.json(res.json)
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

// app.post("/user", (req, res) => {

// })