import React, { useState, useEffect } from 'react'
import Sinkhole from '../components/Sinkhole'
import axios from 'axios'
import { Router, Link, Route, Switch } from 'react-router-dom'
import SinkholeDetails from './SinkholeDetails'
import AllSinkholes from '../components/AllSinkholes'
import EmptyHoleList from '../components/EmptyHoleList'
import SinkholeList from '../components/SinkholeList'

const View = () => {
  const [sinkholes, setSinkholes] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])
  const [markers, setMarkers] = useState([])

  const loadAllSinkholes = async () => {
    const resp = await axios.get('/api/sinkholes')
    console.log(resp)
    setSinkholes(resp.data)
  }

  useEffect(() => {
    loadAllSinkholes()
  }, [])

  return (
    <>
      <h1>Sinkholes in database</h1>
      <h5>
        {sinkholes.map(sinkhole => {
          return <Sinkhole sinkhole={sinkhole} />
        })}
      </h5>
    </>
  )
}

export default View
