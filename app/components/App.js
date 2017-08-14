import React, { Component } from 'react';
import Form from './Form';
import Task from './Task';
import '../app.css';

class App extends Component {
   
    state = {
        tasks: [],
    }

    addTask = (desc, priority) => {
        this.setState( (prevState) => {
            const task = { desc, priority, isComplete: false };
            return ({
                tasks: prevState.tasks.concat([task])
            })
        })
    }
    render() {
        return (
            <div>
                <h1>TODO App</h1>
                <Form addTask={this.addTask}/>
                <div>
                    { this.state.tasks.length!==0 &&
                        this.state.tasks.map( task => <Task key={task.desc} {...task} /> )
                    }
                </div>
            </div>
        );
    }
}

export default App;