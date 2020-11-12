// Imports from React, Movies and Axios
import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

// Read Class Component - Inherits from React.Component
export class Read extends React.Component {

    // State
    state = {
        movies: []
    };

    componentDidMount() {
        // HTTP Axios get information
        axios.get('http://localhost:4000/api/movies')
            .then((response) => {
                // Set data retrieved to movies
                this.setState(
                    {
                        movies: response.data.mymovies
                    }
                )
                console.log(response.data.mymovies)
                console.log(this.state.movies)
            })
            // If error - print to console
            .catch((error) => {
                console.log(error);
            });
    }

    // Print everything to page
    render() {
        return (
            // read.js Main Code
            <div>
                <h3>Hello from Read Component</h3>
                <Movies mymovies={this.state.movies}></Movies>
            </div>
        );
    }

}