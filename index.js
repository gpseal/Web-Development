const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/contact', (req, res) => {
    res.send("Contact page")
})

app.get('/test',(req, res) => {
    let data = {
        "test": "text"
    };
    res.send(data);
})