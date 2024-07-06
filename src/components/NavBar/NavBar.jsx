import logo from '../../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

function NavBar() {
	return (
		<Navbar className='nav-bar' data-bs-theme='light'>
			<Container>
				<Navbar.Brand href='#inicio'>
					<img
						src={logo}
						width='auto'
						height='70'
						className='d-inline-block align-top'
						alt='React Bootstrap logo'
					/>
				</Navbar.Brand>
				<Nav className='me-center nav-list'>
					<Nav.Link className='nav-link' href='#inicio'>
						inicio
					</Nav.Link>
					<Nav.Link className='nav-link' href='#cursos'>
						cursos
					</Nav.Link>
					<Nav.Link className='nav-link' href='#nosotros'>
						nosotros
					</Nav.Link>
					<Nav.Link className='nav-link' href='#contactanos'>
						contactanos
					</Nav.Link>
				</Nav>
				<CartWidget />
			</Container>
		</Navbar>
	);
}

export default NavBar;
