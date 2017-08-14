
import React, {Component} from 'react';
import Priority from './Priority';

class Task extends Component  {
    handleDel = () => {
        const desc = this.props.desc;
        this.props.callVerify(desc);
    }
    render(){
    const bgColor = {
        "high": "lightcoral",
        "medium": "lightsalmon",
        "low": "lightpink"
    }
    const {
            priority,
            desc,
            isComplete,
        } = this.props;
    return (
        <div className="task">
            <div className="row" style={{backgroundColor: bgColor[priority]}}>
                <Priority priority={priority} />
                <p>{desc}</p>
                <button>{!isComplete ? 'Completed!': 'Uncompleted'}</button>
            </div>
            <button id="delete"
             onClick={this.handleDel}>X</button>
        </div>
    );
    }
};

export default Task;