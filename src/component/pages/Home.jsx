
import React from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import { faChain,  faHospital, faHouse,faPencil, faSun } from '@fortawesome/free-solid-svg-icons'
import LinkList from '../assets/LinkList'
const Home = ({count}) => {
	return (
		<div className='content'>
			<h1>自己紹介</h1>
			<div>名前: Polan</div>
			<div>好きなこと: コンピュータ・プログラミングの勉強</div>
			<div>やりたいこと: 執筆活動</div>
			{/* links__container links__items links__items-item*/}
			<div className="links__container">
				<h1>リンク</h1>
				<LinkList isHam={false}/>
			</div>

			<div className='accessCounter'>
				<h1>アクセス数</h1>
				{count}
			</div>
		</div>
	)
}

export default Home