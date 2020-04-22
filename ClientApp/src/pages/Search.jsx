import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import EmptyHoleList from '../components/EmptyHoleList'
import SinkholeList from '../components/SinkholeList'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  const searchForHoles = async () => {
    const resp = await axios.get(
      `/api/search/sinkholes?searchTerm=${searchTerm}`
    )
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
          <SinkholeList results={results} />
        ) : (
          <EmptyHoleList />
        )}
      </main>
    </>
  )
}
export default Search
