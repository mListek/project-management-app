import './InputField.css';
import { useRef } from 'react';

export default function InputField(props) {
  const inputRef = useRef(null);

  return (
    <form className="input" onSubmit={(e) => {
        props.handleAdd(e);
        inputRef.current.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={props.todo}
        onChange={(e) => props.setTodo(e.target.value)}
      placeholder="Enter a new task" className="input__box" />
      <button className="input__submit" type="submit">Go</button>
    </form>
  );
}