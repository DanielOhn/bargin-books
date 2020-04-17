import React, { useState } from "react"
import "../styles/App.css"

function App() {
  const [suggest, setSuggest] = useState<string>("")
  const [result, setResult] = useState<any[]>([])

  const getResults = () => {
    // let search = "https://www.googleapis.com/books/v1/volumes?q=" + suggest

    fetch("https://www.googleapis.com/books/v1/volumes?q=harry+potter")
      .then((res) => res.json())
      .then((res) => setResult(res.items))
      .catch((err) => console.log(err.message))

    console.log(result)
  }

  return (
    <div className="App">
      <h1>Bargin Books</h1>
      <input
        id="search"
        type="text"
        placeholder="book title"
        onChange={(e) => setSuggest(e.target.value)}
      />
      <button onClick={getResults}>Search</button>

      <div className="search-results">
        {result &&
          result.map((item, i) => {
            let book = item.volumeInfo

            return <li>{book.title}</li>
          })}
      </div>
    </div>
  )
}

export default App
