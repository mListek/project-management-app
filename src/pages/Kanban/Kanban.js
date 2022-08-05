import { useState } from 'react';
import './Kanban.css';
import InputField from '../../components/InputField/InputField';
import TodoList from '../../components/TodoList/TodoList';

export default function Kanban() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, {id: Date.now(), todo, status: 'new', user: 'Michał Listek'}]);
      setTodo('');
    }
  };

  return (
    <div className='kanban'>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}