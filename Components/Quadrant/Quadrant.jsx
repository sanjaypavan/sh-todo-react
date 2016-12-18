import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Task from '../Task/Task.jsx';
import TaskInput from '../TaskInput/TaskInput.jsx';
import quadCss from './Quadrant.css';

class Quadrant extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: ['one']
        };
    }

    addTask(text) {
        var tasks = [
            ...this.state.tasks,
            text
        ]
        this.setState({ tasks })
    }

    eachTask(task) {
        return (<Task>{task}</Task>)
    }

    render() {
        return (
            <div className={this.props.quadrant + ' ' + "quadrant" + ' ' + "col-md-6"}>
                <div className="tasks">
                    {this.state.tasks.map((task, i) => {
                        return (<Task key={i}>{task}</Task>)
                    })}
                </div>
                <TaskInput onClick={this.addTask.bind(this)}></TaskInput>
            </div>
        )
    }
}

export default Quadrant;