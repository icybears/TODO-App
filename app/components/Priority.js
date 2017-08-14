import React from 'react';

const Priority = () => {
    return (
        <div>
            <button>+</button>
            <h4>{props.priorityLevel}</h4>
            <button>-</button>
        </div>
    );
};

export default Priority;