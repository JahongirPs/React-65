import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from "../src/componets/nav/Nav"
import Discover from './page/Discover'
import Funded from './page/Funded'
import Home from './page/Home'
import Grand from './page/Grand'


function App() {

  return (
    <div className='container'>
             <Nav/>
                 <Routes>
                 <Route path='/' element={<Home/>}/>
                 <Route path='/Discover' element={<Discover/>}/>
                 <Route path='/Funded' element={<Funded/>}/>
                 <Route path='/Program' element={<Program/>}/>
                 <Route path='/Blog' element={<Blog/>}/>
                 <Route path='/Faq' element={<Faq/>}/>
                 <Route path='/Grand' element={<Grand/>}/>
        </Routes>
             </div>
        
  )
}

export default App
