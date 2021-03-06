import React, { Component } from 'react';

class Form extends Component {

    state = {
        inputVal: '',
        selectVal: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name + 'Val']: e.target.value
        })
    }
 
    handleSubmit = (e) => {
        const {inputVal, selectVal} = this.state;
        e.preventDefault();
        this.props.addTask(inputVal, selectVal);
        this.setState({
            inputVal: '',
            selectVal: ''
        })
    }
    render() {
        return (
            <form className="inputForm" onSubmit={this.handleSubmit}>
                <select  required 
                    name="select"
                    value={this.state.selectVal}
                    onChange={this.handleChange}
                    >
                        <option value="" disabled>Priority</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                </select>
                <input type="text" name="input" placeholder="Add your task here.." required
                            value={this.state.inputVal}
                            onChange={this.handleChange}
                        />
                 
                <input type="submit" value="+"/>
            </form>
        );
    }
}

export default Form;