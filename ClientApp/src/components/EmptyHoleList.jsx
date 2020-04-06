import React from 'react'
import { Link } from 'react-router-dom'

const EmptyHoleList = () => {
  return (
    <section className="no-results-message">
      No sinkhole found. <Link to="/add">Add a new one?</Link>
    </section>
  )
}

export default EmptyHoleList
