import React,{FC,useState,ChangeEvent} from 'react';
import './App.css';
import TodoTask from './Components/TodoTask';
import {ITASK} from './interfaces'

const App: FC = () => {
  const [task,setTask]=useState<string>('');
  const [deadLine,setDeadLine]=useState<number>(0);
  const [todo,setTodo]=useState<ITASK[]>([]);

  const handleChange=(e:ChangeEvent<HTMLInputElement>):void =>{
  if(e.target.name==='task'){
    setTask(e.target.value);
  }else{
    setDeadLine(Number(e.target.value));
  }
     }
     const addTodo=():void=>{
      const newTask={
       taskName:task,
       deadLine:deadLine,
      }
      setTodo([...todo,newTask]);
      setTask('');
      setDeadLine(0);
         }
         const CompeletTask=(TaskNameToDelete:string):void=>{
          setTodo(todo.filter(task=>task.taskName!==TaskNameToDelete));
         }
  return (
    <div className="App">
      <div className='header'>
        <div className='inputContainer'>
       <input type='text' value={task} name='task' placeholder='Add task...' onChange={handleChange}/>
       <input type='number' value={deadLine} name='deadLine' placeholder='deadLine (days)...' onChange={handleChange}/>
       </div>
       <button onClick={addTodo}>Add</button>
      </div>
      <div className='todoList'>
        {
          todo.map((task:ITASK,key:number)=>{
            return <TodoTask task={task} key={key} CompeletTask={CompeletTask}/>
          })
      }
      </div>
    </div>
  );
}

export default App;
