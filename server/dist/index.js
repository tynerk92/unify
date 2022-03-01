// const express = require('express')
import Express from 'express';
const app = Express();
const port = 3000;
app.get('/', (request, res) => {
    res.send('Hello World');
});
app.get('/test', (request, res) => {
    res.send('Testing');
});
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map