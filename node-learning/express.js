const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello My World!')
  })

const PORT = 5000
app.listen(PORT , ()=>{
    console.log(`Server Listening Click here -> http://localhost:${PORT}/`);
})