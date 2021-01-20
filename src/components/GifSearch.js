import React, { Component } from 'react';

class GifSearch extends Component {

    state = {
        searchInput: ""
    }

    handleChange = event => {
        this.setState ({
            searchInput: event.target.value
        })
    }

    render() {
        return (
            <div>
                Search:
                {/*render a form  */}
                {/* receives the user input for the Giphy search */}
                {/* text input should be a controller component that stores the value in its component state and renders the DOM accordingly */}
                <form onSubmit={this.props.handleOnSubmit}>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.searchInput}
                    />
                    {/* <input type="submit" /> */}
                </form>
            </div>
        );
    }
}

export default GifSearch;
