import React from 'react';

const Priority = (props) => {
    return (
        <div>
            <select value={props.priority} readOnly>
                <option value="high" >High</option>
                <option value="medium">Medium</option>
                <option value="low" >Low</option>
            </select>
        </div>
    );
};

export default Priority;