import React from 'react'
import { Router, Link, Route, Switch } from 'react-router-dom'

const AllSinkholes = props => {
  const { question } = props
  return (
    <>
      <main>
        <section>
          <h1>
            <Link to={`/question/${question.id}`}>{question.userQuestion}</Link>
          </h1>
          <h2>KeyWord(s) for this question:</h2>
          <p>{question.keyWord}</p>
        </section>
      </main>
    </>
  )
}
export default AllSinkholes
