import React from 'react';
import taskCss from './Task.css';


class Task extends React.Component {
    render () {
        return (
            <div className={taskCss.task}>{this.props.children}</div>
        )
    }
}

export default Task;