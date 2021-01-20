import React, { Component } from 'react';

class GifList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.data.map( gif => {
                       return (
                            <li key={gif.id}>
                                <img src={gif.images.original.url} alt="" />
                            </li>
                       )
                    })}
                </ul>
            </div>
        );
    }
}

export default GifList;
