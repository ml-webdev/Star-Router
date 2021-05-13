import React, { Component } from 'react';

class Home extends Component {
    constructor(){
        super()
        this.state = {
            _title: '',
            _rating: '',
            _summary: '',
            _genre: '',
        }
    }
    
    async componentDidMount(){

        let searchTitle = prompt("Enter a movie title")
        const url = `http://www.omdbapi.com/?i=tt3896198&apikey=b6720d9d&t=${searchTitle}`
        const response = await fetch(url) 
        const data = await response.json()
        const title = data.Title
        const summary = data.Plot
        const rating = data.Rated
        const genre = data.Genre

        console.log(data)
        console.log(title)
        console.log(rating)
        console.log(summary)

        this.setState({
            _title: title,
            _rating: rating,
            _summary: summary,
            _genre: genre,
        })
    }
    render() {
        return (
            <div>
                <h1>Home: Search for a Movie by Title</h1>

                <h1>{this.state._title}</h1>
                <h2>{this.state._rating}</h2>
                <p>{this.state._summary}</p>
                <p>{this.state._genre}</p>

            </div>
        );
    }
}

export default Home;