import { useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import Intro from "./components/Intro/Intro"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Search from "./components/Search/Search";

const App = () => {
  const [loading, setLoading] = useState(true)
  setInterval(()=>{
    setLoading(false)
  }, 2000)
  return(
    <>
    {loading === true ? <Intro/> : 
    
    <BrowserRouter>
    <Routes>
    <Route path="/search" element={<Search/>}/>
    <Route path="/" element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
    }
    
    
    </>
  )
}

export default App;
