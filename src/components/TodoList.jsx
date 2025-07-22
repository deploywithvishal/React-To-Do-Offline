import React, { useState, useEffect } from 'react';

import ToDoForm from './ToDoForm'
import ToDoItems from './ToDoItems';

const TodoList = () => {

    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem('my-todos');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('my-todos', JSON.stringify(todos));
    }, [todos]);

    const addToDo = text => {
        const newToDo = {
            id: Date.now(),
            text,
            completed: false
        };

        setTodos([newToDo, ...todos]);
    };

    const toggleToDo = id => {
        const updatedToDo = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedToDo);
    }

    const deleteToDo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    console.log(todos);
    return (
        <div className='mb-10'>
            <ToDoForm addToDo={addToDo} />
            <h3 className='px-10 mt-5 text-xl font-semibold'>Tasks:</h3>

            {todos.length === 0 ? (<p className='px-10'>No tasks yet. Add one!</p>) : (todos.map(todo => (
                <ToDoItems
                    key={todo.id}
                    todo={todo}
                    toggleToDo={toggleToDo}
                    deleteToDo={deleteToDo}
                />
            ))
            )}
        </div>
    )
}

export default TodoList