import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MainHeader() {
  return (
    <div id='mainHeader' class='flex flex-col items-center'>
      <img src='vite.svg'></img>
      <nav>
        <button>Home</button>
        <button>My lists</button>
      </nav>
    </div>
  );
}

function App() {
  return (
    <>
      <MainHeader /> 
    </>
  );
}

export default App
