import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faPencil } from '@fortawesome/free-solid-svg-icons'

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
					<Link to="/homepage">
						<h1>
							Polanのホームページ</h1>
					</Link>
				</div>

				<div className="header__menu">
					<ul className='header__menu-items'>
						<li className='header__menu-items-item'>
							<Link to="/homepage/" onClick={toggleHamburger}>
								<FontAwesomeIcon icon={faHouse} />
								ホーム
							</Link>
						</li>
						<li className='header__menu-items-item'>
							<Link to="/homepage/board/" onClick={toggleHamburger}>
								<FontAwesomeIcon icon={faPencil} />
								掲示板
							</Link>
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