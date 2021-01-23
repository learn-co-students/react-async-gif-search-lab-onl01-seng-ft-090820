import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
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
        let fetchUrl = `https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=88WVC9IWy2fFS1hidmuekASpksZsiDbQ&rating=g`
        fetch(fetchUrl)
        .then(res => res.json())
        .then(({data}) => {
            this.setState({
                gifs: data.map(gif => ({
                    url: gif.images.original.url
                }))
            })
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
export default GifListContainer
