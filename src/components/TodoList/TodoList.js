import './TodoList.css';
import SingleTodo from '../SingleTodo/SingleTodo';
import { Droppable } from '@hello-pangea/dnd';

export default function TodoList(props) {
  return (
    <div className="todos__container">
      <Droppable droppableId='TodosList'>
        {
          (provided) => (
            <div className="todos__category neutral" ref={provided.innerRef} {...provided.droppableProps}>
              <span className="todos__heading">
                To Do
              </span>
              {
                props.todos.map((todo, index) => (
                  <SingleTodo
                    index={index}
                    todo={todo}
                    todos={props.todos}
                    key={todo.id}
                    setTodos={props.setTodos}
                  />
                ))
              }
              {provided.placeholder}
            </div>
          )
        }
      </Droppable>
      <Droppable droppableId='InProgressList'>
        {
          (provided) => (
            <div className="todos__category positive" ref={provided.innerRef} {...provided.droppableProps}>
              <span className="todos__heading">
                  In Progress
              </span>
              {
                props.currentTodos.map((todo, index) => (
                  <SingleTodo
                    index={index}
                    todo={todo}
                    currentTodos={props.currentTodos}
                    key={todo.id}
                    setCurrentTodos={props.setCurrentTodos}
                  />
                ))
              }
              {provided.placeholder}
            </div>
          )
        }
      </Droppable>
      <Droppable droppableId='DoneList'>
        {
          (provided) => (
            <div className="todos__category negative" ref={provided.innerRef} {...provided.droppableProps}>
              <span className="todos__heading">
                  Done
              </span>
              {
                props.completedTodos.map((todo, index) => (
                  <SingleTodo
                    index={index}
                    todo={todo}
                    completedTodos={props.completedTodos}
                    key={todo.id}
                    setCompletedTodos={props.setCompletedTodos}
                  />
                ))
              }
              {provided.placeholder}
            </div>
          )
        }
      </Droppable>
    </div>
  );
}