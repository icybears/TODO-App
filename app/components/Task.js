
import React, {Component} from 'react';
import Priority from './Priority';

class Task extends Component  {
    handleDel = () => {
        const desc = this.props.desc;
        this.props.callVerify(desc);
    }
    handleComplete = () => {
        
        this.props.isCompleteFn()
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
            isCompleteFn
        } = this.props;
    return (
        <div className="task">
            <div className="row" 
                style={!isComplete ? {backgroundColor: bgColor[priority]} 
                                  : {backgroundColor: 'lightgrey'}
                }>
                <Priority priority={priority} />
                <p>{desc}</p>
                <button onClick={this.handleComplete}>{!isComplete ? 'Completed!': 'Uncompleted'}</button>
            </div>
            <button id="delete"
             onClick={this.handleDel}>X</button>
        </div>
    );
    }
};

export default Task;