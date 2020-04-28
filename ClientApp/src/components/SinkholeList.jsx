import React from 'react'
import { Link } from 'react-router-dom'

const SinkholeList = props => {
  let { results } = props
  return (
    <ul>
      {results.map(sinkhole => {
        return (
          <ul className="search-terms">
            {sinkhole.name}
            <li>Formation: {sinkhole.formation}</li>
            <li>County: {sinkhole.county}</li>
            <li>Address: {sinkhole.fullAddress}</li>
            <li>Latitude: {sinkhole.latitude}</li>
            <li>Longitude: {sinkhole.longitude}</li>
            <li>
              Link:{' '}
              <Link to={`/sinkholes/${sinkhole.id}`}>I'll take ya there!</Link>{' '}
            </li>
          </ul>
        )
      })}
    </ul>
  )
}

export default SinkholeList
