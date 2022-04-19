import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import CookBookList from './components/CookBookList'



function App() {
  const [count, setCount] = useState(0)

  return (

    <header id="main-header">
        <h1>CookBook</h1>
        <h2>The ultimate recipe manager <br /> <span>since 2022</span> </h2>
        <p><input placeholder="Search for a recipe" /></p><button>FIND</button>
        <CookBookList />
    </header>
    
  
  )

}

export default App
