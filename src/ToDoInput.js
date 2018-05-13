import React, { Component } from 'react';
import App from './App'

export class ToDoInput extends Component {
    constructor(props) {
        super(props)
        this.state = { value: "" };
        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);

    }

    handleChange(e) {
this.setState({value: e.target.value});
    }

    addTodo(todo) {
        //ensures todo is not empty
        if (todo.length > 0) {
            this.props.addToDo(todo);
            this.setState({value: ""});
        }
    }
    render() {
        return (
            <div>
               
                <input type="text" placeholder= "begin zenification" value={this.state.value} onChange={this.handleChange} />
                <button className="button" onClick={() => this.addTodo(this.state.value)}>create</button>
        
            </div>
        );
    }
}

export default ToDoInput;

