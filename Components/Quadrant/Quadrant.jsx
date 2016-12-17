import React from 'react';
import ReactDOM from 'react-dom';
import Task from '../Task/Task.jsx';
import quadCss from './Quadrant.css';

class Quadrant extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: ['one', 'two', 'three', 'four']
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
                <button onClick={() => this.addTask('new')} className='btn'>+</button>
            </div>
        )
    }
}

export default Quadrant;