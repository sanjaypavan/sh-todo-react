import React from 'react';
import ReactDOM from 'react-dom';

class TextInput extends React.Component{
    render() {
        return (<input type="text" className="form-control"/>
        )
    }
}

ReactDOM.render(<TextInput/>, document.getElementById('app'));