// Imports from React and React Bootstrap
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// MovieItem Class Component - Inherits from React.Component
export class MovieItem extends React.Component {

    // Constructor
    constructor() {
        super();

        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    // DeleteMovie Method
    DeleteMovie(e) {
        // Prevent method from being called all the time
        e.preventDefault();

        console.log("Delete pressed!" + this.props.mymovie._id);

        axios.delete('http://localhost:4000/api/movies/' + this.props.mymovie._id)
        .then(() => {
            this.props.ReloadData();
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            // MovieItem Main Code
            <div>
                {/* <h3>{this.props.mymovie.Title}</h3>
                <p>{this.props.mymovie.Year}</p>
                <img src={this.props.mymovie.Poster} width="200" height="200"/> */}

                {/* <h3>Hello from Movie Item</h3>
                {console.log(this.props.mymovies)}
                <MovieItem></MovieItem> */}

                {/* Card with Movie Details */}
                <Card>
                    {/* Card Header with Movie Title */}
                    <Card.Header>{this.props.mymovie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            {/* Image of the Movie Poster */}
                            <img src={this.props.mymovie.Poster} width="200" height="200" alt="Poster"></img>
                            <footer className="blockquote-footer">
                                {/* Movie Year in Footer */}
                                {this.props.mymovie.Year}
                            </footer>
                        </blockquote>
                        
                        {/* Button to delete a movie */}
                        <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>

                    </Card.Body>
                </Card>
            </div>
        );
    }
}