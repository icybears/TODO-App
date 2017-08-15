import React from 'react';

const Filter = (props) => {
    const {filter, changeFilter, tasksCount} = props;
    return (
        <div>
            <form>
                <label><input type="radio" name="Filter" value="all" 
                        checked={filter==='all'? true: false} 
                        onChange={changeFilter.bind(null, 'all')}
                        /> All ({tasksCount("all")})"</label>
                <label><input type="radio" name="Filter" value="uncompleted"
                        checked={filter==='uncompleted'? true: false} 
                        onChange={changeFilter.bind(null, 'uncompleted')}
                        /> Remaining ({tasksCount("uncompleted")})</label>            
                <label><input type="radio" name="Filter" value="completed"
                        checked={filter==='completed'? true: false} 
                        onChange={changeFilter.bind(null, 'completed')}
                        /> Completed ({tasksCount("completed")})</label>
            </form>
        </div>
    );
};

export default Filter;