import {Link} from 'wouter';
import Sidebar from './Sidebar/Sidebar';
import logoSrc from '../assets/pictures/logo.png';

export default function Header() {
	return (
		<header className='d-flex flex-row'>
			<Sidebar/>
			<img className='navbar-brand logo' src={logoSrc} />
			<span className='logo-text'>Aurora Gallery</span>

			<nav className='navbar navbar-expand-lg'>
				<button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<Link className='nav-item m-2' href="/">Home</Link>
						<Link className='nav-item m-2' href="/about">About us</Link>
					</ul>
				</div>
			</nav>
		</header>
	);
}
