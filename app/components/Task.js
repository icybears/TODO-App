
import React, {Component} from 'react';
import Priority from './Priority';

class Task extends Component  {
    handleDel = () => {
        const desc = this.props.desc;
        this.props.callVerify(desc);
    }
    handleComplete = () => {
        const desc = this.props.desc;
        this.props.isCompleteFn(desc);
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
            isCompleteFn,
            changeTaskPriority
        } = this.props;
    return (
        <div className="task">
            <div className="row" 
                style={!isComplete ? {backgroundColor: bgColor[priority]} 
                                  : {backgroundColor: 'lightgrey'}
                }>
                <Priority  desc={desc} priority={priority} 
                           changeTaskPriority={changeTaskPriority}
                />
                <p>{desc}</p>
                <button id="complete" onClick={this.handleComplete}>{isComplete ? <span>&#10004;</span>: <span></span>}</button>
            </div>
            <button id="delete"
             onClick={this.handleDel}>X</button>
        </div>
    );
    }
};

export default Task;