import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    console.log('Users list')

    res.json([
        'Diego',
        'Cleiton',
        'Bruno',
        'Daniel'
    ])
});

app.listen(3000);