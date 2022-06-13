import React from 'react';
import {ITASK} from '../interfaces';

interface Props{
    task:ITASK;
    CompeletTask(TaskNameToDelete:string):void;
}

const TodoTask=({task,CompeletTask}:Props)=> {
    return (
        <div className='task'>
            <div className='content'>
            <span>{task.taskName}</span>
            <span>{task.deadLine}</span>
            </div>
            <button onClick={()=>CompeletTask(task.taskName)}>x</button>
            
        </div>
    );
}

export default TodoTask;