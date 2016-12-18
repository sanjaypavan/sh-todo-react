import React from 'react';
import { DragSource } from 'react-dnd';
import taskCss from './Task.css';

const taskSource = {
    beginDrag(props) {
        return {};
    }
}

const ItemTypes = {
    TASK: 'task'
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Task extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {connectDragSource, isDragging} = this.props;

        return connectDragSource(
            <div className="task">
                <div className="task_text">{this.props.children}</div>
                <div className="task_edit">x</div>
            </div>
        );
    }
}

export default DragSource(ItemTypes.TASK, taskSource, collect)(Task);