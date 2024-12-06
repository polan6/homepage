
import React from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import { faChain,  faHospital, faHouse,faPencil, faSun } from '@fortawesome/free-solid-svg-icons'
import LinkList from '../assets/LinkList'
const Home = () => {
	return (
		<div className='content'>
			<h1>自己紹介</h1>
			<div>名前: Polan</div>
			<div>好きなこと: コンピュータ・プログラミングの勉強</div>
			<div>やりたいこと: 執筆活動</div>
			{/* links__container links__items links__items-item*/}
			<div className="links__container">
				<h1>リンク</h1>
				{/* <ul className='links__items'>
					<li className='links__items-item'>
						<Link to="/" >
							<FontAwesomeIcon icon={faHouse} />
							ホーム
						</Link>
					</li>
					<li className='links__items-item'>
						<Link to="/board">
							<FontAwesomeIcon icon={faPencil} />
							掲示板
						</Link>
					</li>
					<li className='links__items-item'>
						<Link to="/weather" >
							<FontAwesomeIcon icon={faSun} />
							天気予報
						</Link>
					</li>
					<li className='links__items-item'>
						<Link to="/depression" >
							<FontAwesomeIcon icon={faHospital} />
							うつ病チェック
						</Link>
					</li>
					<li className='links__items-item'>
						<a href="https://github.com/polan6/homepage" >
							<FontAwesomeIcon icon={faChain} />
							GitHub
						</a>
					</li>
				</ul> */}
				<LinkList isHam={false}/>
			</div>
			

		</div>
	)
}

export default Home