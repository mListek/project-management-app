import './TodoList.css';
import SingleTodo from '../SingleTodo/SingleTodo';

export default function TodoList(props) {
  return (
    <div className="todos">
      {props.todos.map(todo => {
        return <SingleTodo key={todo.id} todo={todo} todos={props.todos} setTodos={props.setTodos} />
      })}
    </div>
  );
}