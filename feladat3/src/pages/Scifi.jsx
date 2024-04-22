import { Link } from 'react-router-dom'

export default function scifi() {
    return (
        <>
            <nav className='nav bg-dark justify-content-center'>
                <Link className='nav-link link-light' to='/'>Home</Link>
                <Link className='nav-link link-light' to='/humor'>Humor</Link>
            </nav>
            <div className="container">
                <ul>
                    <li>Én, a robot</li>
                    <li>Alapítvány</li>
                    <li>Alapítvány és Birodalom</li>
                    <li>Második Alapítvány</li>
                    <li>Az Alapítvány pereme</li>
                    <li>Alapítvány és Föld</li>
                    <li>Az Alapítvány előtt</li>
                </ul>
            </div>
        </>
    )
}