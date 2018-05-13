import React, { Component } from 'react';
import ToDoHeader from './ToDoHeader';
import ToDoInput from './ToDoInput';
import ToDoItem from './ToDoItem';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDos: [
        {
          id: 0,
          task: "laundry",
          status: true

        },
        {
          id: 1,
          task: "kitty litter",
          status: false
        },
        {
          id: 2,
          task: "vacuum",
          status: false
        },
      ],
      nextId: 3
    };
  }

  addTodo = (todoText) => {
    let todos = this.state.toDos;
    let newItem = {
      id: this.state.nextId,
      task: todoText,
      status: false,
    }
    let toDoArray = [
      ...todos, newItem
    ];

    this.setState({
      toDos: toDoArray,
      nextId: ++this.state.nextId
    })
  };


  checkStatus = (id)=> {
   let toDoCopy = [...this.state.toDos]
   toDoCopy[id].status= !toDoCopy[id].status
    this.setState ({
toDos: toDoCopy
    })
  }
  deleteToDo = (id) => {
    this.setState({
      toDos: this.state.toDos.filter((todo, index) => todo.id !== id)
    })
  }

  render() {
    return (
      <div className="todo-container">
        <h1> zenify </h1>
        <h2>a tidy home is a tidy mind.</h2>
        <ToDoHeader />
        <ToDoInput todoText="" addToDo={this.addTodo} />
        <ul>
          {
            this.state.toDos.map((todo) => {
              return <ToDoItem todo={todo} key={todo.id} id={todo.id} deleteToDo={this.deleteToDo} checkStatus={this.checkStatus} />
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
