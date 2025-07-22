import React from 'react'

const ToDoItems = ({ todo, toggleToDo, deleteToDo }) => {
    return (

        <div className='mx-10 mt-2 flex justify-between items-start border-b-1 border-red-500 pb-2'>
            <div className='flex items-start'>
                <input
                    type="checkbox"
                    className='mr-2 mt-2 cursor-pointer'
                    checked={todo.completed}
                    onChange={() => toggleToDo(todo.id)}
                />
                <span className={`${todo.completed ? 'line-through' : ''}`}>
                    {todo.text}
                </span>
            </div>
            <button className='mt-1 cursor-pointer'
                onClick={() => deleteToDo(todo.id)}
            >❌</button>
        </div>

    )
}

export default ToDoItems