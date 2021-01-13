import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
            gifs: [],
            search: ''
        }
    }

    onChangeSearch = event => {
        let search = event.target.value
        this.setState({
          search: search
        })
      }

    handleOnClick = event => {
        let query = this.state.search
        let fetchUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=aUateGyd8I5ccsJr9ALRxxHlM76P33wL&rating=g&limit=3`
        fetch(fetchUrl)
        .then(resp => resp.json())
        .then(({data}) => {
            console.log(this.state.search)
            this.setState({ gifs: data.map(gif => ({ url: gif.images.original.url }) ) })
            })
            
    }

    render() {
        return (
            <div>
                <GifSearch onChangeSearch={this.onChangeSearch} handleOnClick={this.handleOnClick} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}