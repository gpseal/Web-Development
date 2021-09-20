const express = require('express')
const app = express()
const port = 5000

const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, 'assets')))


app.get('/', (req, res) => res.send('index'))


app.get('/contact', (req, res) => {
    res.send("Contact page")
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))