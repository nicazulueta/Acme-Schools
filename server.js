const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const { syncAndSeed, School, Student } = require('./db');

syncAndSeed();

app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use(express.json());

app.get('/api/schools', async (req, res, next) => {
    try {
        res.send(await School.findAll());
    }
    catch (err) {
        next(err);
    }
})

app.get('/api/students', async (req, res, next) => {
    try {
        res.send(await Student.findAll())
    }
    catch (err) {
        next(err);
    }
});

app.post('/api/students', async (req, res, next) => {
    try {
        const createStudent = await Student.create(req.body)
        res.send(createStudent);
    } catch (error) {
        console.error(err);
    }
});

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => console.log(`Listening on port ${port}`))
