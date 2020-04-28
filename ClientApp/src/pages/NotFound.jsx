import React from 'react'
import image from '../images/error-404.png'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <section class="not-found">
        <section class="error-pic-box">
          {' '}
          <img class="error-image" src={image} alt="404 error" />
        </section>
        <section class="redirect">
          {Math.ceil(Math.random() * 100) % 2 === 0 ? (
            <span></span>
          ) : (
            <span></span>
          )}
          <h1>Page not found!</h1> <br />{' '}
          <h2>Sorry, that page is not available.</h2>
          <br />
          <h3>
            Do you want to{' '}
            <a href="" onclick="window.history.go(-1); return false;">
              go back?
            </a>
          </h3>
          <h3>
            {' '}
            <Link to="/view/all">View</Link> all sinkholes?
          </h3>
          <h3>
            {' '}
            <Link to="/search">Search</Link> for a sinkhole?
          </h3>
          <h3>
            <Link to="add">Add</Link> a sinkhole?
          </h3>
        </section>
      </section>
    </div>
  )
}

export default NotFound
