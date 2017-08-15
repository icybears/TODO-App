import React, { Component } from 'react';
import Form from './Form';
import Task from './Task';
import Verify from './Verify';
import '../app.css';

class App extends Component {
   
    state = {
        tasks: [
            { desc: "Learn Redux",priority: "high", isComplete: false },
            { desc: "Learn more vanilla javascript", priority:"low", isComplete: false },
            { desc: "Apply Redux to React Apps", priority:"high", isComplete: false },
            { desc: "Learn NodeJS, ExpressJS and MongoDB", priority:"medium", isComplete: false }
        ],
        applyVerify: null,
        selectedTaskDesc: null
    }

    addTask = (desc, priority) => {
        this.setState( (prevState) => {
            const task = { desc, priority, isComplete: false };
            return ({
                tasks: prevState.tasks.concat([task])
            })
        })
    }
    
    callVerify = (selectedTask) => {
        this.setState({
            applyVerify: true,
            selectedTaskDesc: selectedTask
        })
    }
    onYes = () => {
        const taskDesc = this.state.selectedTaskDesc;
        this.delTask(taskDesc, () => {
            this.setState({
                applyVerify:false,
                selectedTaskDesc: null,
            })
        });
    }
    onNo = () => {
        this.setState({
            applyVerify: false,
            selectedTaskDesc: null,
        })
    }
    delTask = (desc, callback) => {

        this.setState( prevState => {
           return (
                {
                 tasks: prevState.tasks.filter( task => task.desc !== desc )
                }
           )
        }, callback)
    }
    isCompleteFn = (taskDesc) => {
        this.setState(
           (prevState) => {
            const updatedTasks = prevState.tasks.map( task => {
                if(task.desc === taskDesc)
                    task.isComplete = !task.isComplete;

                return task;
            });
            return(
                {
                    tasks: updatedTasks
                }
            )
           } 
        )
    }
    changeTaskPriority = (taskDesc, newPriority) => {
        this.setState((prevState) => {
            const updatedTasks = prevState.tasks.map( task => {
                if(task.desc === taskDesc)
                    task.priority = newPriority;
                return task;
            })
            return(
                {
                    tasks: updatedTasks
                }
            )
        } )
    }
    
    render() {
        return (
            <div>
                <h1>TODO App</h1>
                <Form addTask={this.addTask}/>
                <div>
                    { 
                    this.state.applyVerify &&
                     <Verify onYes={this.onYes}
                             onNo={this.onNo}
                             message="Delete Task ?"
                     />
                    }
                    { this.state.tasks.length===0 && <div>No Tasks !</div>}
                    { this.state.tasks.length!==0 &&
                        this.state.tasks.map( task => (
                            <Task key={task.desc} 
                                    {...task}
                                    callVerify={this.callVerify}
                                    isCompleteFn={this.isCompleteFn}
                                    changeTaskPriority={this.changeTaskPriority}
                                    />
                            ) 
                        )
                    }
                </div>
            </div>
        );
    }
}

export default App;