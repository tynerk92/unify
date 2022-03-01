import Express from 'express';
const app = Express();
const port = 3000;
app.get('/', (req, res) => {
    res.send({
        text: 'Hello World',
    });
});
app.get('/test', (req, res) => {
    res.send({
        text: 'Test',
    });
});
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map