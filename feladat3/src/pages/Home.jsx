import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
        <nav className='nav bg-dark justify-content-center'>
            <Link className='nav-link link-light' to='/scifi'>Sci-fi</Link>
            <Link className='nav-link link-light' to='/humor'>Humor</Link>
        </nav>
        <div className="container">
            <p>Üdvözöljük a honlapunkon! Válasszon a menüsorból hogy megtekintse az aktuálisan kiállított könyveket!</p>
        </div>
        </>
    )
}