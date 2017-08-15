import React, {Component} from 'react';

class Sort extends Component {
    handleChange = (e) => {
        this.props.changeSortBy(e.target.value);
    }
    render(){
        const sortBy = this.props.sortBy;
        return (
            <div>
                <select value={sortBy} onChange={this.handleChange} >
                    <option value="priority">Priority</option>
                    <option value="recent">Recent</option>
                    <option value="oldest">Oldest</option>
                </select>
            </div>
        );
    }
};

export default Sort;