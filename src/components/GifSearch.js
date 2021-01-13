import React, { Component } from 'react'

export default class GifSearch extends Component {

    render() {
        return (
            <div>
            
                Enter a Search Term:
                <input type="text" onInput={this.props.onChangeSearch} ></input>
                <button type="button" onClick={this.props.handleOnClick}>Find Gifs</button>
                <br>
                </br>
            
            </div>
        )
    }
}
