import React, {Component} from 'react';

class TaskPriority extends Component {


    handleChange = (e) => {
        const desc = this.props.desc;
        const newPriority = e.target.value;
        this.props.changeTaskPriority(desc, newPriority);
    }

    render(){
        return (
            <div>
                <select value={this.props.priority} onChange={this.handleChange}>
                    <option value="high" >High</option>
                    <option value="medium">Medium</option>
                    <option value="low" >Low</option>
                </select>
            </div>
        );
    }
};

export default TaskPriority;