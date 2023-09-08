import { useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import Intro from "./components/Intro/Intro"
const App = () => {
  const [loading, setLoading] = useState(true)
  setInterval(()=>{
    setLoading(false)
  }, 2000)
  return(
    <>
    {loading === true ? <Intro/> : <HomePage/>}
    
    
    </>
  )
}

export default App;
