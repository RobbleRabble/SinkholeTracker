import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import EmptyHoleList from '../components/EmptyHoleList'

const ByCounty = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])
  const [markers, setMarkers] = useState([])

  const loadAllLocations = async () => {
    const resp = await axios.get('/api/sinkholes')
    console.log(resp)
    setMarkers(resp.data)
  }

  useEffect(() => {
    loadAllLocations()
  }, [])

  return (
    <>
      <h1>Sinkholes by County</h1>
      <h4>What-with the clicking!</h4>
      <section className="county-container">
        <ul>
          <li>Alachua</li>
          <li>Baker</li>
          <li>Bay</li>
          <li>Bradford</li>
          <li>Brevard</li>
          <li>Broward</li>
          <li>Calhoun</li>
          <li>Charlotte</li>
          <li>Citrus</li>
          <li>Clay</li>
          <li>Collier</li>
          <li>Columbia</li>
          <li>DeSoto</li>
          <li>Dixie</li>
          <li>Duval</li>
          <li>Escambia</li>
          <li>Flagler</li>
          <li>Gadsden</li>
          <li>Gilchrist</li>
          <li>Glades</li>
          <li>Gulf</li>
          <li>Hamilton</li>
          <li>Hardee</li>
          <li>Hendry</li>
          <li>Hernando</li>
          <li>Highlands</li>
          <li>Hillsborough</li>
          <li>Holmes</li>
          <li>Indian River</li>
          <li>Jackson</li>
          <li>Jefferson</li>
          <li>Lafayette</li>
          <li>Lake</li>
          <li>Lee</li>
          <li>Leon</li>
          <li>Levy</li>
          <li>Liberty</li>
          <li>Madison</li>
          <li>Manatee</li>
          <li>Marion</li>
          <li>Martin</li>
          <li>Miami-Dade</li>
          <li>Monroe</li>
          <li>Nassau</li>
          <li>Okaloosa</li>
          <li>Okeechobee</li>
          <li>Orange</li>
          <li>Osceola</li>
          <li>Palm Beach</li>
          <li>Pasco</li>
          <li>Pinellas</li>
          <li>Polk</li>
          <li>Putnam</li>
          <li>Santa Rosa</li>
          <li>Sarasota</li>
          <li>Seminole</li>
          <li>St. Johns</li>
          <li>St. Lucie</li>
          <li>Sumter</li>
          <li>Suwannee</li>
          <li>Taylor</li>
          <li>Union</li>
          <li>Volusia</li>
          <li>Wakulla</li>
          <li>Walton</li>
          <li>Washington</li>
        </ul>
      </section>
    </>
  )
}
export default ByCounty
