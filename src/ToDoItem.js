import React, { Component } from 'react';

export  class ToDoItem extends Component {
    constructor(props) {
        super(props);
    }

    deleteToDo(id) {
        this.props.deleteToDo(id);
    } 

    checkStatus(id) {
        this.props.checkStatus(id);
    }

    taskComplete() {
const {todo, checkStatus} = this.props;

const completedStyle = {
    color: checkStatus ? 'grey' : 'gold'
}
        return (
<p stye={completedStyle}>{todo}</p>
        );
    }


    render() {
        return (
            <div className="button-container">
                <p>{this.props.todo.task}</p>
                <input type= "checkbox" checked= {this.props.todo.status} onChange={(e) => this.checkStatus(this.props.id)}/>
                <button className="button" onClick={(e) => this.deleteToDo(this.props.id)}>delete</button>
            </div>
        )
    }
}

export default ToDoItem;