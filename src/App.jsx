import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Signup from './Firebase Email/Signup'
import Login from './Firebase Email/Login'
import Home from './Firebase Email/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
         <Route path='/home' element={<Home/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App