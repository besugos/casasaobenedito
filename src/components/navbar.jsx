import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar-container'>
            <ul className='navbar'>
                <li><Link className='navbar-item' to="/">Home</Link></li>
                <li><Link className='navbar-item' to="/corrente">Corrente</Link></li>
                <li><Link className='navbar-item' to="/buzios">Buzios</Link></li>
                <li><Link className='navbar-item' to="/cabala">Cabala</Link></li>
            </ul>            
        </div>
    )
}

export default Navbar