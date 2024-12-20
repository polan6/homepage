import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChain,  faCommentDots,  faHospital, faHouse,faPencil, faQ, faSun } from '@fortawesome/free-solid-svg-icons'

const LinkList = ({isHam}) => {
	const toggleHamburger=()=>{
		const menu=document.querySelector('.header__menu')
		const ham=document.querySelector('.header__hamburger')
		ham.classList.toggle('active')
		menu.classList.toggle('active')
	}
	{/* links__container links__items links__items-item*/}
	return (
		
		<ul className={isHam?'header__menu-items':"links__items"}>
			<li className={isHam?'header__menu-items-item':"links__items-item"}>
				<Link to="/" onClick={isHam?toggleHamburger:()=>{}}>
					<FontAwesomeIcon icon={faHouse} />
					ホーム
				</Link>
			</li>
			<li className={isHam?'header__menu-items-item':"links__items-item"}>
				<Link to="/board" onClick={isHam?toggleHamburger:()=>{}}>
					<FontAwesomeIcon icon={faPencil} />
					掲示板
				</Link>
			</li>
			<li className={isHam?'header__menu-items-item':"links__items-item"}>
				<Link to="/weather" onClick={isHam?toggleHamburger:()=>{}}>
					<FontAwesomeIcon icon={faSun} />
					天気予報
				</Link>
			</li>
			<li className={isHam?'header__menu-items-item':"links__items-item"}>
				<Link to="/depression" onClick={isHam?toggleHamburger:()=>{}}>
					<FontAwesomeIcon icon={faHospital} />
					うつ病チェック
				</Link>
			</li>
			{/* <li className={isHam?'header__menu-items-item':"links__items-item"}>
				<Link to="/interview" onClick={isHam?toggleHamburger:()=>{}}>
					<FontAwesomeIcon icon={faCommentDots} />
					技術面接質問集
				</Link>
			</li> */}
			<li className={isHam?'header__menu-items-item':"links__items-item"}>
				<a href="https://github.com/polan6/homepage" onClick={isHam?toggleHamburger:()=>{}}>
					<FontAwesomeIcon icon={faChain} />
					GitHub
				</a>
			</li>
			<li className={isHam?'header__menu-items-item':"links__items-item"}>
				<a href="https://qiita.com/Polan" onClick={isHam?toggleHamburger:()=>{}}>
					<FontAwesomeIcon icon={faQ} />
					Qiita
				</a>
			</li>
		</ul>

	
	)
}

export default LinkList