import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
            gifData: [],
            // search: ''
        }
    }

    componentDidMount(){
        this.handleOnSubmit()
    }

    // handleOnChange = (event) => {
    //     // event.preventDefault()
    //     const searchTerm = event.target.value
    //     this.setState(previousState => {
    //         return { 
    //         ...previousState, 
    //         search: searchTerm
    //         }
    //     })
    // }
    
    handleOnSubmit = ( query = '') => {
        // e.preventDefault()
        console.log(query)
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=nb83QMisJyO81otChJxMSSbhwklmeZqx&rating=g`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                gifData: data.data.slice(0,3).map(gif => ({url: gif.images.original.url})
            )
            })
        })
    }

    render() {
        return (
            <div>
                <GifList gifs={this.state.gifData} /> 
                <GifSearch handleSubmit={this.handleOnSubmit}  />
            </div>
        )
    }
}

export default GifListContainer;


// handleChange={this.handleOnChange}