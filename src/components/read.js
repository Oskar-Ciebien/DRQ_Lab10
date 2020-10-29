// Imports from React, Movies and Axios
import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

// Read Class Component - Inherits from React.Component
export class Read extends React.Component {

    state = {
        movies: []
    };

    componentDidMount() {
        // HTTP Axios get information
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
            .then(response => {
                // Set data retrieved to movies
                this.setState(
                    {
                        movies: response.data.Search
                    }
                )
            })
            // If error - print to console
            .catch((error) => {
                console.log(error);
            });
    }

    // Print everything to page
    render() {
        return (
            <div>
                <h3>Hello from Read Component</h3>
                <Movies mymovies={this.state.movies}></Movies>
            </div>
        );
    }

}