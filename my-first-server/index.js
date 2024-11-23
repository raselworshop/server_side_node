const express = require('express');
const cors = require('cors')
const phones = require('./phones.json')
const app = express();
const port = 5000;

app.use(cors());
app.get('/', (req, res)=>{
    res.send('Hello from my first server ever')
})
app.get('/phone', (req, res)=>{
    res.send(phones)
})
app.get('/phone/:id', (req, res)=>{
    const id = req.params.id;
    console.log('I need the id: ', id);
    const phone = phones.find(phone=> phone.id === parseInt(id)) || {};
    res.send(phone)
})
app.get('/data', (req, res)=>{
    res.send('Your desired data is coming very soon...')
})

app.listen(port, ()=>{
    console.log(`My first server is running on port: ${port}`)
})