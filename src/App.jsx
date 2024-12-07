import { useEffect, useState } from 'react'
import Header from './component/assets/Header'
import Footer from './component/assets/Footer'
import Home from './component/pages/Home'
import Board from './component/pages/Board'
import Weather from './component/pages/Weather'
import Depression from './component/pages/Depression'

import './App.css'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

import { db } from './firebase'
import { doc, updateDoc, increment,collection,getDoc } from "firebase/firestore";

// eslint-disable-next-line no-undef, react-refresh/only-export-components
export const ROUTER_BASENAME =process.env.NODE_ENV === 'development' ? '/' : '/homepage'
function App() {
	const [isLoaded,setisLoaded]=useState(localStorage.getItem("isLoaded"))
	const [accessCount,setAccessCount]=useState('')
	const access=async()=>{
		await updateDoc(doc(db, "access", "counter"), {
			count: increment(1)
		});
		const snap=await getDoc(doc(db, "access", "counter"));
		setAccessCount(snap.data().count)
	}
	const getCount=async()=>{
		const snap=await getDoc(doc(db, "access", "counter"));
		setAccessCount(snap.data().count)
	}
	useEffect(()=>{
		if(process.env.NODE_ENV==="production"&&(!isLoaded)){
			access()
			setisLoaded(true)
			localStorage.setItem('isLoaded',true)
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
			</Routes>
			</div>
			<Footer/>
    </Router>
  )
}

export default App
