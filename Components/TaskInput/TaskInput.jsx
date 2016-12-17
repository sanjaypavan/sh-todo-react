import React from 'react';
import ReactDOM from 'react-dom';

class TaskInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    addTaskText() {
        var text = this.refs.newTaskText.value;
        this.props.onClick(text);
        this.clearTaskInput();
    }

    clearTaskInput() {
        this.refs.newTaskText.value = "";
    }


    render() {
        return (
            <div className="add_task row">
                <div className="col-lg-10">
                    <input ref="newTaskText" type="text" className="form-control" placeholder="Add your task.." />
                </div>
                <button className="btn btn-default" onClick={() => this.addTaskText()}>+</button>
            </div>
        )
    }
}

export default TaskInput;