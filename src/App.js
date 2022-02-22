import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTodo, fetchTodos } from './store/todo-slice'
import './App.css';
import { InputField } from './components/input-field';
import { TodoList } from './components/todo-list';

function App() {

  const [text, setText] = useState('')
  const { status, error } = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const addTask = () => {
    if (text.trim().length) {
      dispatch(addNewTodo(text))
      setText('')
    }
  }

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <div className="App">
      <div className="wrapper">
        <InputField
          text={text}
          handleInput={setText}
          handleSubmit={addTask}
        />

        {status === 'loading' && <h1>Loading...</h1>}
        {error && <h1>An error occured: {error}</h1>}

        <TodoList />
      </div>
    </div>
  );
}

export default App;


