import React, { Component } from 'react'

export default class GifSearch extends Component {
   
    constructor() {
        super()
        this.state= {
            search: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    handleForm = () => {
        const searchTerm = this.state.search
        this.props.handleSubmit(searchTerm)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleForm}>
                <input type="text" name="search" onChange={this.handleChange} value={this.state.search} />
                <input type="submit" /> 
                </form>
            </div>
        )
    }
}
