// Import from React and Axios
import React from 'react';
import axios from 'axios';

// Create Class Component - Inherits from React.Component
export class Create extends React.Component {

    // Constructor - Start
    constructor() {
        super();

        // Methods
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMovieTitle = this.onChangeMovieTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);

        // State
        this.state = {
            Title: '',
            Year: '',
            Poster: '',
        }

    } // Constructor - End

    // onChangeMovieYear() - Start
    onChangeMovieYear(event) {
        this.setState({
            Year: event.target.value
        })
    } // onChangeMovieYear() - End

    // onChangeMovieTitle() - Start
    onChangeMovieTitle(event) {
        this.setState({
            Title: event.target.value
        })
    } // onChangeMovieTitle() - End

    // handleSubmit() - Start
    handleSubmit(event) {
        event.preventDefault();
        alert("Movie Added " + this.state.Title + " " + this.state.Year + " " + this.state.Poster);

        // Constant newMovie
        const newMovie = {
            Title: this.state.Title,
            Year: this.state.Year,
            Poster: this.state.Poster
        }

        // Axios Post
        axios.post('http://localhost:4000/api/movies', newMovie)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));
    } // handleSubmit() - End

    // onChangeMoviePoster() - Start
    onChangeMoviePoster(event) {
        this.setState({
            Poster: event.target.value
        })
    }  // onChangeMoviePoster() - End

    render() {
        return (
            // Create Main Code
            <div>
                <h1>This is my Create Component.</h1>

                {/* Form with handleSubmit */}
                <form onSubmit={this.handleSubmit}>
                    {/* Add Title */}
                    <div className="form-group">
                        <label>Add movie title: </label>
                        <input type="text"
                            value={this.state.Title}
                            onChange={this.onChangeMovieTitle}
                            className="form-control"
                        ></input>
                    </div>

                    {/* Add Year */}
                    <div className="form-group">
                        <label>Add movie year: </label>
                        <input type="text"
                            value={this.state.Year}
                            onChange={this.onChangeMovieYear}
                            className="form-control"
                        ></input>
                    </div>

                    {/* Add Poster */}
                    <div className="form-group">
                        <label>Add movie poster url: </label>
                        <input type="text"
                            value={this.state.Poster}
                            onChange={this.onChangeMoviePoster}
                            className="form-control"
                        ></input>
                    </div>

                    {/* Submit */}
                    <div>
                        <input
                            type="submit"></input>
                    </div>
                </form>
            </div>
        );
    }
}