import React from 'react'
import { Router, Link, Route, Switch } from 'react-router-dom'
import Sinkhole from './Sinkhole'

const AllSinkholes = props => {
  const { sinkhole } = props
  return (
    <>
      <main>
        <section>
          <ul>
            <li>
              <Link to={`/sinkholes/${sinkhole.id}`}>{sinkhole.name}</Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
export default AllSinkholes
