const express = require('express');

const app = express();

app.use(express.static('build'));
app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/build/index.html`);
});

const server = app.listen(5000, () => {
    const { port } = server.address();
    console.log('Application running on port %s', port);
});