import React, { Component } from 'react';
import Form from './Form';
import Task from './Task';
import Verify from './Verify';
import Filter from './Filter';
import Sort from './Sort';
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
        selectedTaskDesc: null,
        filter: 'all',
        sortBy: 'priority',
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
    changeFilter = (filter) => {
        this.setState({
                          filter: filter
                    }
                    );
               
    }
    filterTasks = (filter) => {
        const tasks = this.state.tasks;
        return (tasks.filter(this.filters[filter]))
    }
    tasksCount = (filter) => {
        const tasks = this.state.tasks;
        return (tasks.filter(this.filters[filter]).length)
    }
     filters =  {
            "all":  task => task,
            "uncompleted": task => !task.isComplete,
            "completed": task => task.isComplete,
            }
    changeSortBy = (type) => {
        this.setState({
            sortBy: type
        })
    }
    sortFn = (arr) => {
        return(
            {
                "priority" : (a, b) => {
                    const priorities = {
                        "high": 3,
                        "medium": 2,
                        "low": 1
                    }
                    return (priorities[b.priority] - priorities[a.priority])
                },
                "recent": (a, b) => arr.indexOf(b) - arr.indexOf(a),
                "oldest": (a, b) => arr.indexOf(a) - arr.indexOf(b),
            }
        )
    }
    render() {
        const filter = this.state.filter;
        const sortBy = this.state.sortBy;
        const tasks = this.filterTasks(filter);
        const tasksCopy = tasks;
        const sortedTasks = tasksCopy.sort(this.sortFn(this.state.tasks)[sortBy]);
        
        
        return (
            <div>
                <h1>TODO App</h1>
                <Form addTask={this.addTask}/>
                <div className="row">
                <Filter tasksCount={this.tasksCount}
                        filter={this.state.filter}
                        changeFilter={this.changeFilter}
                        />
                <Sort sortBy={this.state.sortBy} 
                      changeSortBy={this.changeSortBy} 
                     />
                </div>
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
                        sortedTasks.map( task => 
                            <Task key={task.desc} 
                                    {...task}
                                    callVerify={this.callVerify}
                                    isCompleteFn={this.isCompleteFn}
                                    changeTaskPriority={this.changeTaskPriority}
                                    />
                            
                        )
                    }
                </div>
            </div>
        );
    }
}

export default App;