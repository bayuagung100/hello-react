import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
            value: ""
        };
        this.HandleChange = this.HandleChange.bind(this);
        this.HandleSubmit = this.HandleSubmit.bind(this);
    }
    
    HandleChange(e){
        this.setState({
            value: e.target.value
        });
    }
    HandleSubmit(e){
        e.preventDefault();
        alert("Pesan Input Adalah: " + this.state.value);
    }
    render() {
        return (
            <form onSubmit={this.HandleSubmit} >
                <input type="text" value={this.state.value} onChange={this.HandleChange}/>
                <input type="submit" value="Submit Data"/>
            </form>
        );
    }
}

export default Form;