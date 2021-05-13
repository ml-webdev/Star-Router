import React, { Component } from 'react';

class Movies extends Component {
    constructor(){
        super()
        this.state={
            _title: '',
            _rated: '',
            _poster: '',
        }
    }
    async componentDidMount(){
        let imdbId = prompt("Enter a 7 digit IMDb ID: ")
        const url = `http://www.omdbapi.com/?i=tt${imdbId}&apikey=b6720d9d&`
        const response = await fetch(url)
        const data = await response.json()
        const title = data.Title
        const rated = data.Rated
        const poster = data.Poster
        console.log(data)
        this.setState({
            _title: title,
            _rated: rated,
            _poster: poster
        })
    }
    render() {
        return (
            <div>
                <h1>Movies: Search for a Movie by ID</h1>
                <h2>{this.state._title}</h2>
                <p>{this.state._rated}</p>
                <p><img src={this.state._poster}></img></p>
            </div>
        );
    }
}

export default Movies;