
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path');


app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'assets')))

const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts)


app.get('/', (req, res) => res.render('index'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

