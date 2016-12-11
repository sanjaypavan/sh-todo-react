import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Task.jsx';

class Quadrant extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            tasks: ['one','two','three','four']
        };
    }

    addTask(text) {
        var tasks = [
            ...this.state.taks,
            text
        ]
        this.setState({tasks})
    }

    eachTask(task) {
        return (<Task>{task}</Task>)
    }

    render() {
        return (<div className="quadrant">
        {this.state.tasks.map((task, i) => {
            return (<Task key = {i}>{task}</Task>)
        })}
        </div>)
    }
}

ReactDOM.render(<Quadrant/>, document.getElementById('app'));