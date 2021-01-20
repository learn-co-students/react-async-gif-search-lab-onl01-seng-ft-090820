
import React from 'react';

const GifList = (props) => {
    console.log(props.results);

    return (
        <div className="col-sm-8">
            {props.results.map(gif => <img key={gif.url} src={gif.url} alt="gif" /> )}
        </div>
    )
}

export default GifList;