import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/trending?api_key=Pq8aHnM83nVnAqTwEgmwoWVuPQ9TI5FF&limit=25&rating=g')
            .then(resp => resp.json())
            .then(data => {
                this.setState({gifs: data.data.slice(0,3)})
            })
    }
    
    handleSubmit = event => {
        event.preventDefault()
        // console.log(event.target[0].value)
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=Pq8aHnM83nVnAqTwEgmwoWVuPQ9TI5FF&q=${event.target[0].value}`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({gifs: data.data.slice(0,3)})
            })
    }


    render() {
        return (
            <div>
                <GifSearch handleOnSubmit={this.handleSubmit}/>
                <br/>
                <GifList data={this.state.gifs}/>
            </div>
        );
    }
}

export default GifListContainer;
