import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChain,  faHospital, faHouse,faPencil, faSun } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
	const toggleHamburger=()=>{
		const menu=document.querySelector('.header__menu')
		const ham=document.querySelector('.header__hamburger')
		ham.classList.toggle('active')
		menu.classList.toggle('active')
	}
	return (

			<div className="header">
				<div className="header__text">
					<Link to="/">
						<h1>
							Polanのホームページ</h1>
					</Link>
				</div>

				<div className="header__menu">
					<ul className='header__menu-items'>
						<li className='header__menu-items-item'>
							<Link to="/" onClick={toggleHamburger}>
								<FontAwesomeIcon icon={faHouse} />
								ホーム
							</Link>
						</li>
						<li className='header__menu-items-item'>
							<Link to="/board" onClick={toggleHamburger}>
								<FontAwesomeIcon icon={faPencil} />
								掲示板
							</Link>
						</li>
						<li className='header__menu-items-item'>
							<Link to="/weather" onClick={toggleHamburger}>
								<FontAwesomeIcon icon={faSun} />
								天気予報
							</Link>
						</li>
						<li className='header__menu-items-item'>
							<Link to="/depression" onClick={toggleHamburger}>
								<FontAwesomeIcon icon={faHospital} />
								うつ病チェック
							</Link>
						</li>
						<li className='header__menu-items-item'>
							<a href="https://github.com/polan6/homepage" onClick={toggleHamburger}>
								<FontAwesomeIcon icon={faChain} />
								GitHub
							</a>
						</li>
					</ul>

				</div>
				<button className="header__hamburger" onClick={toggleHamburger}>
					<span></span>
  				<span></span>
  				<span></span>
				</button>
			</div>

	)
}

export default Header