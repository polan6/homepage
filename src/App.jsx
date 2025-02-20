import { useEffect, useState } from 'react'
import Header from './component/assets/Header.jsx'
import Footer from './component/assets/Footer.jsx'
import Home from './component/pages/Home/Home.jsx'
import Board from './component/pages/Board/Board.jsx'
import Weather from './component/pages/Weather/Weather.jsx'
import Depression from './component/pages/Depression/Depression.jsx'
import Interview from './component/pages/Interview/Interview.jsx'
import PeriodicTable from './component/pages/PeriodicTable/PeriodicTable.jsx'

import './App.css'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

import { db } from './firebase'
import { doc, updateDoc, increment,collection,getDoc } from "firebase/firestore";

// eslint-disable-next-line no-undef, react-refresh/only-export-components
export const ROUTER_BASENAME =process.env.NODE_ENV === 'development' ? '/' : '/homepage'
function App() {
	const [isLoaded,setIsLoaded]=useState(sessionStorage.getItem("isLoaded"))
	const [accessCount,setAccessCount]=useState('')
	const access=async()=>{
		await updateDoc(doc(db, "access", "counter"), {
			count: increment(1)
		});
		await getCount()
	}
	const getCount=async()=>{
		const snap=await getDoc(doc(db, "access", "counter"));
		setAccessCount(snap.data()?.count)
	}
	useEffect(()=>{
		if(process.env.NODE_ENV==="production"&&(!isLoaded)){
			access()
			setIsLoaded(true)
			sessionStorage.setItem('isLoaded',true)
		}else{
			getCount()
		}
	},[])


  return (
    <Router basename={ROUTER_BASENAME}>
      <Header/>
			<div className="page-content">
			<Routes>
				<Route path='/' element={<Home count={accessCount}/>}></Route>
				<Route path='/board' element={<Board/>}></Route>
				<Route path='/weather' element={<Weather/>}></Route>
				<Route path='/depression' element={<Depression/>}></Route>
				<Route path='/interview' element={<Interview/>}></Route>
				<Route path='/periodictable' element={<PeriodicTable/>}></Route>
			</Routes>
			</div>
			<Footer/>
    </Router>
  )
}

export default App
