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

    handleForm = (e) => {
        e.preventDefault()
        console.log(this.state.search)
        const searchTerm = this.state.search
        this.props.handleSubmit(searchTerm)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleForm}>
                <input type="text" name="search" onChange={this.handleChange} value={this.state.search} />
                <input type="submit" />
                {/* <button onClick={this.handleForm}>Submit</button>  */}
                </form>
            </div>
        )
    }
}