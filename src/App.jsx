import React from 'react'
import ToDoForm from './components/ToDoForm'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <main className='bg-red-200 w-full min-h-[100vh] flex justify-center  py-10'>
      <div className='bg-white lg:w-[50vw] w-[90vw]'>
        <h1 className='text-2xl font-bold border-b-8 border-red-200 h-15 flex justify-center items-center'>To Do List</h1>
        <TodoList/>
      </div>
    </main>
  )
}

export default App