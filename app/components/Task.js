
import React, {Component} from 'react';
import TaskPriority from './TaskPriority';

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
        "high": "rgb(242, 48, 48)",
        "medium": "salmon",
        "low": "lightsalmon"
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
                <TaskPriority  desc={desc} priority={priority} 
                           changeTaskPriority={changeTaskPriority}
                />
                <p>{desc}</p>
                <button id="complete" onClick={this.handleComplete}>{isComplete ? <span>&#10004;</span>: <span></span>}</button>
                <button id="delete"
             onClick={this.handleDel}>X</button>
            </div>
            
        </div>
    );
    }
};

export default Task;