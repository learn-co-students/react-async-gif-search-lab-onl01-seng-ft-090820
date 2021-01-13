import React, { Component } from 'react'

export default class GifList extends Component {
    render() {
        return (
            
                this.props.gifs.map((gif, index) => <li key={index}><img src={gif.url} alt="gif" /></li>)
            
        )

            
        
    }
}
