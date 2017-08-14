import React, { Component } from 'react';
import Form from './Form';
import '../app.css';

class App extends Component {
   
    state = {
        tasks: [],
    }

    addTask = (desc, priority) => {
        this.setState( (prevState) => {
            const task = { desc, priority, isComplete: false };
            return prevState.tasks.concat([task]);
        })
        console.log(this.state.tasks);
    }
    render() {
        return (
            <div>
                <h1>TODO App</h1>
                <Form />
                <div>
                    {
                        
                    }
                </div>
            </div>
        );
    }
}

export default App;