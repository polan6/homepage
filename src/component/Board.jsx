import React, { useState } from 'react'
import { auth,provider } from '../firebase'
import { signInWithPopup,signOut } from 'firebase/auth'

const Board = () => {
	const [isLogin,setIsLogin]=useState(localStorage.getItem("isLogin"))
	const login=()=>{
		signInWithPopup(auth,provider).then((result)=>{
			localStorage.setItem('isLogin',true)
			setIsLogin(true)
		})
	}
	const logout=()=>{
		signOut(auth).then(()=>{
			console.log(1)
			localStorage.clear()
			setIsLogin(false)
		})
	}


	return (
		<div>
		{!isLogin?(
			<div>
				<p>ログインして書き込む</p>
				<button onClick={login}>Googleでログイン</button>
				
			</div>
		):(
			<div>
				<p>ログアウトする</p>
				<button onClick={logout}>ログアウト</button>
			</div>
		)}
		</div>
	)
}

export default Board