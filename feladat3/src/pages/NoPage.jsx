import { Link } from 'react-router-dom'

export default function NoPage() {
    return (
        <>
            <nav className='nav bg-dark justify-content-center'>
                <Link className='nav-link link-light' to='/'>Home</Link>
                <Link className='nav-link link-light' to='/scifi'>Sci-fi</Link>
                <Link className='nav-link link-light' to='/humor'>Humor</Link>
            </nav>
            <div className="container">
                <p>404 Nem találom az oldalt!</p>
            </div>
        </>
    )
}