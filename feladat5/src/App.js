import 'bootstrap/scss/bootstrap.scss';
import { useState } from "react"
import Konyv from './Konyv'

function App() {
  const [title, setTitle] = useState('')
  const [isbn, setIsbn] = useState('')
  const [message, setMessage] = useState('')

  function handleClick() {
    try {
      const k = new Konyv(title, isbn)
      setMessage('')
      setTitle('')
      setIsbn('')
      console.log(k.toString())
    } catch (error) {
      setMessage(error.message)
    }
  }

  return (
    <div className='container'>
      <div className='mb-2'>
        <label className='form-label' htmlFor='title'>Cím</label>
        <input
          type='text'
          className='form-control'
          id='title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div className='mb-2'>
        <label className='form-label' htmlFor='isbn'>ISBN</label>
        <input
          type='text'
          className='form-control'
          id='isbn'
          value={isbn}
          onChange={e => setIsbn(e.target.value)}
        />
      </div>
      {message && <div className='alert alert-danger'>{message}</div>}
      <div className='mb-2'>
        <input
          type='button'
          className='btn btn-primary'
          value='Új könyv'
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default App;
