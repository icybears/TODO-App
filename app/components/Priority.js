import React from 'react';

const Priority = (props) => {
    return (
        <div>
                <select>
                        <option value="high" selected={props.priority === 'high'}>High</option>
                        <option value="medium" selected={props.priority === 'medium'}>Medium</option>
                        <option value="low" selected={props.priority === 'low'}>Low</option>
                </select>
        </div>
    );
};

export default Priority;