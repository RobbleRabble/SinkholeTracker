import React from 'react'

const SinkholeList = props => {
  let { results } = props
  return (
    <ul>
      {results.map(sinkhole => {
        return <li>{sinkhole.name}</li>
      })}
    </ul>
  )
}

export default SinkholeList
