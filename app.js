const express = require('express');

const app = express()
const port = 3000
const path = require('path');

app.set('view engine', 'ejs')

//MiddleWares//

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

//End of Middleware

//Begin Routes 

app.get('/', (req, res) => {
    res.render('index')
})

//End Routes


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})