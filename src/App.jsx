
import './App.css'
import { Page1 } from './components/page1'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import { Register } from './components/Register'
import { Login } from './components/Login'
import { Page2 } from './components/Page2'
import { MyProvider } from './assets/context/UseDataContext'




function App() {


  return (
  <>
  <MyProvider>
 <BrowserRouter>

  <Routes>
   <Route index path='/' element={ <Page1/> } />
   <Route path='/Page2' element={ <Register/> } />
   <Route path='/Page3' element={ <Login/> } />
   <Route path='/Page4' element={ <Page2/> } />

  
  </Routes>


 </BrowserRouter>
 
 </MyProvider>
  </>
  )
}

export default App
