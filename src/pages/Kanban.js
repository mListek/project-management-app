import { useState } from 'react';
import InputField from '../components/InputField';
import TodoList from '../components/TodoList';

export default function Kanban() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, {id: Date.now(), todo, status: false, user: 'Michał Listek'}]);
      setTodo('');
    }
  };

  return (
    <div className='container'>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList />
      {todos.map((t) => <li>{t.todo}</li>)}
    </div>
  );
}