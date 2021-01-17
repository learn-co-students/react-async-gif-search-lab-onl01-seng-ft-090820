import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
            gifData: []
        }
    }

    componentDidMount(){
        this.handleOnSubmit()
    }
    
    handleOnSubmit = (searchTerm = "party") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=nb83QMisJyO81otChJxMSSbhwklmeZqx&rating=g`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                gifData: data.data.slice(0,3).map(gif => gif.images.original.url)
            })
        })
    }

    render() {
        return (
            <div>
                <GifList gifs={this.state.gifData} /> 
                <GifSearch handleSubmit={this.handleOnSubmit} />
            </div>
        )
    }
}

export default GifListContainer;
