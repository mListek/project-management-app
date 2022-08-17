import { useState } from 'react';
import './Kanban.css';
import InputField from '../../components/InputField/InputField';
import TodoList from '../../components/TodoList/TodoList';
import { DragDropContext } from '@hello-pangea/dnd';

export default function Kanban() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [currentTodos, setCurrentTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, {id: Date.now(), todo, status: 'new', user: 'Michał Listek'}]);
      setTodo('');
    }
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId &&
        destination.index === source.index) return;

    let add, active = todos,
      current = currentTodos,
      completed = completedTodos;

      if (source.droppableId === 'TodosList') {
        add = active[source.index];
        active.splice(source.index, 1);
      } else if (source.droppableId === 'InProgressList') {
        add = current[source.index];
        current.splice(source.index, 1);
      } else {
        add = completed[source.index];
        completed.splice(source.index, 1);
      }

      if (destination.droppableId === 'TodosList') {
        active.splice(destination.index, 0, add);
      } else if (destination.droppableId === 'InProgressList') {
        current.splice(destination.index, 0, add);
      } else {
        completed.splice(destination.index, 0, add);
      }

      setTodos(active);
      setCurrentTodos(current);
      setCompletedTodos(completed);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='kanban'>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          currentTodos={currentTodos}
          setCurrentTodos={setCurrentTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
}