import React, { Component } from 'react'

export default class GifSearch extends Component {
    state = {
        query: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetchGIFs(this.state.query);
    }


    render() {
        return (
            <div className="col-sm-4" type="search">
                <form className="bd-search" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="query">I'm looking for...</label>
                        <input className="form-control" type="text" name="query" id="query" onChange={e => this.setState({query: e.target.value})} />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Search"/>
                </form>
            </div>
        )
    }
}