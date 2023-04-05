import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import CookBookList from './components/CookBookList'



function App() {
  const [count, setCount] = useState(0)

  return (

    <header id="main-header">
        <h1>PictureBook</h1>
        <h2>The ultimate picture manager <br /> <span>since 2023</span> </h2>
        <CookBookList />
    </header>
    
  
  )

}

export default App
