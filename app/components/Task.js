
import React from 'react';
import Priority from './Priority';

const Task = () => {
    return (
        <div>
            <div>
                <h2>{props.desc}</h2>
                <Priority priority={props.priority} />
                <button>{!props.isComplete ? 'Completed!': 'Uncompleted'}</button>
                <button>Delete</button>
            </div>
        </div>
    );
};

export default Task;