import React from 'react';
import ReactDOM from 'react-dom';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from '../Constants.jsx';
import Task from '../Task/Task.jsx';
import TaskInput from '../TaskInput/TaskInput.jsx';
import quadCss from './Quadrant.css';


const quadrantTarget = {
    drop(props, monitor, component) {
        var item = monitor.getItem();
        component.addTask(item['taskText']); 
    }
}

function collect(connect, monitor){
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }
}

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

        const {connectDropTarget, isOver} = this.props;
        
        return connectDropTarget(
            <div className={this.props.quadrant + ' ' + "quadrant" + ' ' + "col-md-6"}>
                <div className="tasks">
                    {this.state.tasks.map((task, i) => {
                        return (<Task key={i}>{task}</Task>)
                    })}
                </div>
                <TaskInput onClick={this.addTask.bind(this)}></TaskInput>
            </div>
        );
    }
}

export default DropTarget(ItemTypes.TASK, quadrantTarget, collect)(Quadrant);