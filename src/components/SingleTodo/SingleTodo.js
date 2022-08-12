import { useState, useEffect, useRef } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './SingleTodo.css';

const SingleTodo = (props) => {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(props.todo.todo);

  const handleDone = (id) => {
    props.setTodos(
      props.todos.map((todo) =>
        todo.id === id ? {...todo, status: 'done'} : todo
      )
    )
  };

  const handleDelete = (id) => {
    props.setTodos(
      props.todos.filter(todo => todo.id !== id)
    )
  };

  const handleEdit = (e, id) => {
    e.preventDefault();

    props.setTodos(props.todos.map((todo) => (
      todo.id === id ? {...todo, todo: editTodo} : todo
    )))

    setEdit(false);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, props.todo.id)}>
      {
        edit ? (
          <input
            ref={inputRef}
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            className='todos__single--text'
          />
        ) : (
        props.todo.status === 'done' ? (
          <s className='todos__single--text'>{props.todo.todo}</s>
        ) : (
          <span className='todos__single--text'>{props.todo.todo}</span>
        )
      )}
      <div>
        <span className="icon" onClick={() => {
          if(!edit) {
            setEdit(!edit)
          }
        }}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(props.todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(props.todo.id)}>
          <MdDone />
        </span>
      </div>

    </form>
  )
}

export default SingleTodo;