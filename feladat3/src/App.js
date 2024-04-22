import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Scifi from './pages/Scifi'
import Humor from './pages/Humor'
import NoPage from './pages/NoPage'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/scifi' element={<Scifi />} />
        <Route path='/humor' element={<Humor />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
  )
}

export default App
