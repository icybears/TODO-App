
import React from 'react';
import Priority from './Priority';

const Task = (props) => {
    const bgColor = {
        "high": "lightcoral",
        "medium": "lightsalmon",
        "low": "lightpink"
    }
    return (
        <div className="task">
            <div className="row" style={{backgroundColor: bgColor[props.priority]}}>
                <Priority priority={props.priority} />
                <p>{props.desc}</p>
                <button>{!props.isComplete ? 'Completed!': 'Uncompleted'}</button>
            </div>
            <button id="delete">X</button>
        </div>
    );
};

export default Task;