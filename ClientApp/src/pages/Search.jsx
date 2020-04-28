import React, { useState } from 'react'
import axios from 'axios'

import EmptyHoleList from '../components/EmptyHoleList'
import SinkholeList from '../components/SinkholeList'
import Sinkhole from '../components/Sinkhole'

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
        <section className="search-results">
          <ul>
            <li>
              {results.length > 0 ? (
                <SinkholeList results={results} />
              ) : (
                <EmptyHoleList />
              )}
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
export default Search
