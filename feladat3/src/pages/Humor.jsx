import { Link } from 'react-router-dom'

export default function Humor() {
    return (
        <>
            <nav className='nav bg-dark justify-content-center'>
                <Link className='nav-link link-light' to='/'>Home</Link>
                <Link className='nav-link link-light' to='/scifi'>Sci-fi</Link>
            </nav>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Cím</th>
                            <th>Szerző</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Galaxis útikalauz stopposoknak </td>
                            <td>Douglas Adams</td>
                        </tr>
                        <tr>
                            <td>Mort, A Halál kisinasa </td>
                            <td>Terry Pratchett</td>
                        </tr>
                        <tr>
                            <td>Vadkanapó</td>
                            <td>Terry Pratchett</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}