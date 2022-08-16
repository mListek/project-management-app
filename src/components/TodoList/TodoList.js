import './TodoList.css';
import SingleTodo from '../SingleTodo/SingleTodo';

export default function TodoList(props) {
  return (
    <div className="todos__container">
      <div className="todos__category neutral">
        <span className="todos__heading">
          To Do
        </span>
        {
          props.todos.map((todo) => (
            <SingleTodo
              todo={todo}
              todos={props.todos}
              key={todo.id}
              setTodos={props.setTodos}
            />
          ))
        }
      </div>
      <div className="todos__category positive">
        <span className="todos__heading">
            In Progress
        </span>
        {
          props.todos.map((todo) => (
            <SingleTodo
              todo={todo}
              todos={props.todos}
              key={todo.id}
              setTodos={props.setTodos}
            />
          ))
        }
      </div>
      <div className="todos__category negative">
        <span className="todos__heading">
            Done
        </span>
        {
          props.todos.map((todo) => (
            <SingleTodo
              todo={todo}
              todos={props.todos}
              key={todo.id}
              setTodos={props.setTodos}
            />
          ))
        }
      </div>
    </div>
  );
}