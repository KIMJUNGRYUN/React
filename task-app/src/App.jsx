import './App.css'
import TaskColumn from './components/TaskColumn'
import TaskForm from './components/TaskForm'
import todoIcon from './assets/direct-hit.png';
import doingIcon from './assets/glowing-star.png';
import doneIcon from './assets/check-mark-button.png';
import { useEffect, useState } from 'react';

const saveTasks = localStorage.getItem('tasks'); //localStorage에 저장된 값 가져오기

function App() {

  const [tasks, setTasks] = useState(JSON.parse(saveTasks) || []); //문자열을 자바스크립트로 바꾸기 
  
  //삭제 버튼
  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, i) => i !== taskIndex);
    setTasks(newTasks);
  };

  //할 일 들이 바뀔때마다 로컬 스토리지에 저장함
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

 
  return (
    <div className='app'>
        <TaskForm setTasks={setTasks}/>
        <main className='app_main'> 
          <TaskColumn 
              title='할 일' 
              icon={todoIcon}  
              tasks={tasks} 
              status='todo' 
              handleDelete={handleDelete}/>
          <TaskColumn 
              title='진행중' 
              icon={doingIcon} 
              tasks={tasks} 
              status='doing'  
              handleDelete={handleDelete}/>
          <TaskColumn 
              title='완 료' 
              icon={doneIcon}
              tasks={tasks} 
              status='done'  
              handleDelete={handleDelete}/>
        </main>
    </div>
  )
}

export default App
