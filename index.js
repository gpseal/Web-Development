const express = require('express')
const app = express()
const port = process.env.port || 3000

// app.get('/', (req, res) => res.send('index'))

const path = require('path');
app.get('/', (req, res) => res.render('index'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.set("view engine","ejs");

app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'assets')))


// app.get('/', (req, res) => res.send('index'))


// app.get('/contact', (req, res) => {
//     res.send("Contact page")
// })



// app.listen(port, () => console.log(`Example app listening on port ${port}!`))