import React, { useState } from 'react'

const ToDoForm = ({addToDo}) => {

    const [input, setInput] = useState('');

    function getInput(e) {
        e.preventDefault();
        if (input.trim() === '') return;
        addToDo(input);
        setInput('');
    }       

    return (
        <form className='px-10 flex gap-5 pt-5' onSubmit={getInput} >
            <input
                type="text"
                placeholder='Note...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className='w-[80%] border-2 border-red-500 px-2 py-2 rounded'
            />
            <button type="submit" className='w-[20%] bg-red-500 text-white font-bold flex items-center justify-center rounded'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="none">
                    <path d="M12.001 5.00003V19.002" stroke="rgba(30, 255, 0, 1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.002 12.002L4.99998 12.002" stroke="#rgba(30, 255, 0, 1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Add
            </button>
        </form>
    )
}

export default ToDoForm