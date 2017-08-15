import React, {Component} from 'react';

class Sort extends Component {
    handleChange = (e) => {
        this.props.changeSortBy(e.target.value);
    }
    render(){
        const sortBy = this.props.sortBy;
        return (
            <div id="sort">
                <label>Sort by <select value={sortBy} onChange={this.handleChange} >
                    <option value="priority">Priority</option>
                    <option value="recent">Recent</option>
                    <option value="oldest">Oldest</option>
                </select></label>
            </div>
        );
    }
};

export default Sort;