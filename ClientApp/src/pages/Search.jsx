import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import EmptyHoleList from '../components/EmptyHoleList'
import HoleList from '../components/HoleList'
const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  const searchForHoles = async () => {
    const resp = await axios.get(`/api/search/holes?searchTerm=${searchTerm}`)
    console.log(resp.data)
    setResults(resp.data)
  }

  return (
    <>
      <section className="search-container">
        <input
          type="search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button onClick={searchForHoles}>Search</button>
      </section>
      <main>
        {results.length > 0 ? (
          <HoleList results={results} />
        ) : (
          <EmptyHoleList />
        )}
      </main>
    </>
  )
}
export default Search
