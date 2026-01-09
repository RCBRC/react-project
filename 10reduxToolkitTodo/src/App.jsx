import React from 'react' 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className="min-h-screen flex justify-center items-start pt-10 bg-slate-600">
      <div className="w-full max-w-xl">
    
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
        </div>
    </div>
  )
}

export default App
