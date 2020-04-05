import React, { useState } from "react"
import "../styles/App.css"

let suggested = ["white", "blue", "black", "red", "purple", "yellow", "orange"]

function App() {
  const [suggest, setSuggest] = useState("")

  const autoComplete = () => {
    let suggestions = suggested.filter((word) => word.includes(suggest))

    return suggestions
  }

  const submitVal = () => {
    console.log("Suggestions: ")

    let words = autoComplete()

    words.map((word) => {
      console.log(word)
    })
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
      <button onClick={submitVal}>Search</button>
    </div>
  )
}

// MAKE AUTOCOMPLETE FOR THE FORM
// Get a list of suggested words
// Compare the words to the typed in text in the input
// Dispaly the array of suggested words that match the currently typed in text

export default App
