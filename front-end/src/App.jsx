import Header from "./components/Header"
import Home from "./Pages/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ForgotPassword from "./Pages/ForgotPassword"
function App() {
  
  return (
    <BrowserRouter>
    
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
