import './TodoList.css';

export default function TodoList(props) {
  return (
    <div className="todos">
      {props.todos.map(todo => {
        return <li key={todo.id}>{todo.todo}</li>
      })}
    </div>
  );
}
// 44:20 video