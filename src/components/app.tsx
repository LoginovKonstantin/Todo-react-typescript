import * as React from "react";
import * as $ from "jquery";

export interface MyProps {
  compiler: string;
  framework: string;
}
interface MyState {
  todo: string;
  todos: Todos[];
}
interface Todos {
  index: number;
  action: string;
}

export class App extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {todo: '', todos: []};
  }
  public handleLogin(valueInput: String): void {
    this.setState({ todo: valueInput } as MyState);
  }
  public addToList(todo: String): void {
    let tmp: Todos[] = this.state.todos;
    let length: number = this.state.todos.length;
    let newAction = {index: length, action: todo};
    tmp.push(newAction as Todos);
    this.setState({ todos: tmp } as MyState);
  }
  public removeEl(index: number): void {
    let newTodo: Todos[] = this.state.todos.filter((el, i) => {
      if(i != index) return el;
    });
    this.setState({ todos: newTodo } as MyState);
  }
  render() {
      return (
        <div>
          <input onChange = {(e) => this.handleLogin(e.target.value)} placeholder = 'TO login'/>
          <button onClick = {() => this.addToList(this.state.todo)}> Add </button>
          <div>{this.state.todos.map((el, i) => {
            return (<div key = {i}>
              <button onClick = {() => {this.removeEl(i)}}>remove</button>
              {el.action}
            </div>)
          })}</div>
        </div>
      )
  }
}
