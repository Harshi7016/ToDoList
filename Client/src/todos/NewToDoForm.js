import React, { useState } from 'react';
import './NewToDoForm.css';
import { addTodoRequest } from './thunks';
import { connect } from 'react-redux';
import { getTodos } from './selectors';

const NewToDoForm = ({ todos = [], onCreatePressed }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className='new-todo-form'>
      <input
        className='new-todo-input'
        type='text'
        id='myInput'
        onKeyDown={() => {
          if (event.key === 'Enter') {
            event.preventDefault();
            document.getElementById('MyBtn').click();
          }
        }}
        placeholder='Type New ToDo List Here'
        value={inputValue}
        void='true'
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className='new-todo-button'
        id='MyBtn'
        onClick={() => {
          // onCreatePressed(inputValue);
          // setInputValue("");
          const isDuplicatedText = todos.some((todo) => {
            todo.text === inputValue;
          });
          if (!isDuplicatedText) {
            onCreatePressed(inputValue);

            setInputValue('');
          }
        }}
      >
        📝Create
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: getTodos(state),
});
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addTodoRequest(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewToDoForm);
