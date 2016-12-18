import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Quadrant from '../Quadrant/Quadrant.jsx';

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quadrants: ["quadrant1", "quadrant2", "quadtrant3", "quadrant4"]
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <Quadrant quadrant={"quadrant1"}></Quadrant>
                    <Quadrant quadrant={"quadrant2"}></Quadrant>
                </div>
                <div className="row">
                    <Quadrant quadrant={"quadrant3"}></Quadrant>
                    <Quadrant quadrant={"quadrant4"}></Quadrant>
                </div>
            </div>
        )
    }
}

export default DragDropContext(HTML5Backend)(Board);