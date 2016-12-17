import React from 'react';
import taskCss from './Task.css';


class Task extends React.Component {
    render() {
        return (
            <div className="task">
                <div className="task_text">{this.props.children}</div>
                <div className="task_edit">x</div>
            </div>
        )
    }
}

export default Task;