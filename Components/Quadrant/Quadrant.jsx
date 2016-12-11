import React from 'react';
import ReactDOM from 'react-dom';
import Task from '../Task/Task.jsx';
import quadCss from './Quadrant.css';

class Quadrant extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            tasks: ['one','two','three','four']
        };
    }

    addTask(text) {
        var tasks = [
            ...this.state.tasks,
            text
        ]
        this.setState({tasks})
    }

    eachTask(task) {
        return (<Task>{task}</Task>)
    }

    render() {
        return (<div className={quadCss.quadrant1}>
        {this.state.tasks.map((task, i) => {
            return (<Task key = {i}>{task}</Task>)
        })}
        <button onClick={() => this.addTask('new')}>+</button>        
        </div>
        )
    }
}

ReactDOM.render(<Quadrant/>, document.getElementById('app'));