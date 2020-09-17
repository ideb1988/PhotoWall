import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const tasks = require('./tasks')

class List extends Component {
    render() {
        return (
            <ol>{
                this.props.tasks.map((task, index) => {
                    return <li key={index}>{task}</li>
                })
            }</ol>
        );
    }
}

class Title extends Component {
    render() {
        return <h1>{this.props.title}</h1>;
    }
}

class Main extends Component{
    render(){
        return <div>
            <Title title={'ToDos'}/>
            <List tasks={tasks}/>
        </div>
    }
}

ReactDOM.render(<Main/>, document.getElementById('root'));
