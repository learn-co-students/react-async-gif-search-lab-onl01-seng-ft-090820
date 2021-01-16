import React from "react";

class GifList extends React.Component {
    render() {
        return (
            this.props.gifs.map((gif, index) => <li key={index}><img src={gif.url} alt="gif" /></li>)
        )
    }
}

export default GifList