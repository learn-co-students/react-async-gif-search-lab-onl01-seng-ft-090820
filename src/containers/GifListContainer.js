import React, { Component } from 'react'
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

export default class GifListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
    }

    componentDidMount() {
        this.fetchGIFs();
    }
    
    
    fetchGIFs = (q = "dolphins") => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${q}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(res => res.json())
        .then(({data}) => {
            this.setState({
                results: data.map(gif => ({url: gif.images.original.url}))
            })
        })
    }

    render() {
        return (
            <div className="container">
                <GifList results={this.state.results}/>
                <GifSearch fetchGIFs={this.fetchGIFs} />
            </div>
        )
    }
}