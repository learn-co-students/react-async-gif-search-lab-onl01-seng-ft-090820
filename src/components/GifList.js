import React, { Component } from 'react'

export default class GifList extends Component {
    render() {
        return (
            this.props.gifs.map((gif, index) => <div key={index}><img src={gif.url} alt="gif" /></div>)
        )

            
        
    }
}
