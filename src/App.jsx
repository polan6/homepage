import { useState } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './component/Home'
import Board from './component/Board'

import './App.css'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

function App() {

  return (
    <Router>
      <Header/>
			<div className="page-content">
			<Routes>
				<Route path='/homepage' element={<Home/>}></Route>
				<Route path='/homepage/board' element={<Board/>}></Route>
			</Routes>
			</div>
			<Footer/>
    </Router>
  )
}

export default App
