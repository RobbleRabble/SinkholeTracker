import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EmptyHoleList from '../components/EmptyHoleList'
import Sinkhole from '../components/Sinkhole'

const SinkholeDetails = props => {
  console.log(props)
  const sinkholeId = props.match.params.sinkholeId

  const [sinkhole, setSinkhole] = useState()

  const getSinkholeData = async () => {
    const resp = await axios.get('/api/sinkholes/' + sinkholeId)
    console.log(resp.data)
    console.log('Fetching that data!')
    setSinkhole(resp.data)
  }

  useEffect(() => {
    // make our API call on page load
    getSinkholeData()
  }, [])

  if (sinkhole) {
    return <Sinkhole sinkhole={sinkhole} />
  } else {
    return <EmptyHoleList />
  }
}

export default SinkholeDetails
