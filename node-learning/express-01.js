const express = require('express');
const app = express();
const json_data = [
    { 'id': '1234', 'name': 'Lalit Kumar', 'DOB': '07/02/01' },
    { 'id': '1235', 'name': 'Mohita Kumar', 'DOB': '04/11/02' }
];

app.get('/', (req, res) => {
    const currentTime = new Date().toLocaleTimeString();
    console.log(`Request received at ${currentTime}`);
    // res.json(json_data);
    res.send('Hello');
});

app.listen(5000, () => {
    console.log(`Server Listening Click here -> http://localhost:5000/`);
});
