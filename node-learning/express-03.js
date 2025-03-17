const express = require('express')

const app = express()


app.get('/user',(req,res) =>{
    // res.send('<h1>products</h1><a href ="/api">link</a>');
    
    //Execution of the PARAMS
    // res.send(`UserId ${req.params.userId}`);

    //Execution of Query
    const data = req.query;
    res.send(JSON.stringify(data));
})


app.listen(3000 , () => {
    console.log(`Server is Listening!! http://localhost:3000/`);
});