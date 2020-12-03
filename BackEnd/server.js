// Constants
const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

// CORS
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Database Connection
const strConnnection = 'mongodb+srv://admin:admin@drq.oculr.mongodb.net/MoviesDB?retryWrites=true&w=majority';
mongoose.connect(strConnnection, { useNewUrlParser: true });

// Schema
const Schema = mongoose.Schema;

// Movie Schema
const movieSchema = new Schema({
    Title: String,
    Year: String,
    Poster: String
})

// Model
const movieModel = mongoose.model('movie', movieSchema);

// Home page
app.get('/', (req, res) => {
    // Main Code
    res.send('Hello World!')
})

// /api/movies/:id
app.get('/api/movies/:id', (req, res) => {
    console.log(req.params.id);

    movieModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

// Edit Movie
app.put('/api/movies/:id', (req, res) => {
    console.log('Update: ' + req.params.id);

    // Find by ID and Update the movie
    movieModel.findByIdAndUpdate(req.params.id,
        req.body,
        (err, data) => {
            res.send(data);
        })
})

// Delete Movie
app.delete('/api/movies/:id', (req, res) => {
    console.log("Delete " + req.params.id);

    movieModel.findByIdAndDelete({_id:req.params.id}, (err, data) => {
        if (err)
            res.send(err);
        res.send(data);
    })
})

// /api/movies
app.get('/api/movies', (req, res) => {

    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"

    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"

    //         "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"

    //         "Poster": "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"

    // Send back json data
    // res.json({
    //     mymovies: movies
    // })

    // Getting data from Database
    movieModel.find((err, data) => {
        res.json(data);
    })
})

// Post
app.post('/api/movies', (req, res) => {
    console.log(req.body);

    // Create Model
    movieModel.create({
        Title: req.body.Title,
        Year: req.body.Year,
        Poster: req.body.Poster
    })

    res.send('Data Received!')
})

// Listen
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})