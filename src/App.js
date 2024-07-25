import TodoForm from './components/TodoForm.jsx'
import TodoList from './components/TodoForm.jsx'
import React from 'react';
import './App.css'

function App() {
  const {tasks, setTasks} = useState([]);

  useEffect(()=> {console.log('ToDo List Loaded!')}, []);

  const addTask = (task) => {
    setTasks([...tasks, {text: task, completed: false}])
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTasks = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <div className='App'>
      <h1>ToDo List v0.0000001</h1>
      <TodoForm addTask={addTask}/>
      <TodoList tasks={tasks} completeTask={completeTask} deleteTask={deleteTasks} />
    </div>
  );
};

export default App;
