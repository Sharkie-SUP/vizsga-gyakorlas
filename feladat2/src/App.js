import { useState } from "react"

function App() {
const [data, setData] = useState({
  wLink: '',
  wLeiras: ''
})

function handleChange(e) {
  setData({ ...data, [e.target.name]: e.target.value })
}

function handleSubmit(e) {
  e.preventDefault()
  console.log(data)
}

  return(
    <div className="container">
<h2>Az antikvárium története</h2>
<p>Az antikváriumot 1901-ben alapították, még az Osztrák-Magyar Monarchia idején. Magát az épületet többször újjá kellett építeni, ez azonban lehetőséget adott a megújításra, korszerűsítésre.</p>
<p>A jelenlegi épület 2019-ben lett felújítva.</p>
<h2>Hírességek, akik itt jártak</h2>
<div className="row">
<div className="col-md-4">
    <div className="card p-3">
<h3>Ady Endre</h3>
<p>Többször is kikölcsönözte Deák Ferenc műveit</p>
<p><a href="https://hu.wikipedia.org/wiki/Ady_Endre">Wikipédia</a></p>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card p-3">
<h3>Móra Ferenc</h3>
<p>Az Én Újságom c. gyermeklapba írt művei közül 50-nek a kéziratát az antikváriumnak adományozta</p>
<p><a href="https://hu.wikipedia.org/wiki/Móra_Ferenc">Wikipédia</a></p>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card p-3">
<h3>Névtelen adományozó</h3>
<p>1992-ben 500 000 Ft-tal támogatta az antikvárium működését</p>
    </div>
  </div>
</div>
<div className="card mt-5 mx-auto p-3 w-75">
    <form onSubmit="handleSubmit">
      <h2>Új híresség jelzése</h2>
      <label htmlFor="wLink" className="form-label">Wikipédia link</label>
      <input 
        type="url" 
        id="wLink"
        name="wLink"
        className="form-control"
        value={data.wLink}
        onChange={handleChange}
      />
      <label htmlFor="wLeiras" className="form-label">Leírás</label>
      <textarea
        cols="30" rows="10"
        id="wLeiras"
        name="wLeiras"
        className="form-control"
        value={data.wLeiras}
        onChange={handleChange}
      >
      </textarea> 
      <button type="submit" className="btn btn-primary mt-3" >Elküld</button>
    </form>
</div>
    </div>
  )
}

export default App;
