import React, { Component } from 'react';

class CustomInput extends Component {
    constructor(props) {
        super(props);
        this.state={
            value: "Input Pertama"
        };
        this.HandleInput = this.HandleInput.bind(this);
        this.HandleChange = this.HandleChange.bind(this);

        //ref
        this.TextInput = React.createRef();
    }
    
    HandleInput(){
        this.setState({
            value: ""
        });
        //ref
        this.TextInput.current.focus(); 
    }
    HandleChange(e){
        this.setState({
            value: e.target.value
        });
    }


    render() {
        return (
            <div>
                {/* //ref */}
                <input type="text" value={this.state.value} ref={this.TextInput} onChange={this.HandleChange}/>
                <button onClick={this.HandleInput}>Kirim</button>
            </div>
        );
    }
}

export default CustomInput;