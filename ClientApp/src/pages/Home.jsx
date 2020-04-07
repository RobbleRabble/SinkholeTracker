import React from 'react'

import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <main>
        <header>
          <h1>Welcome to Karstographer</h1>
          <h4>View, report, and learn about sinkholes</h4>
        </header>
        <section class="hero"></section>
        <p>Photo provided by the US Dept of Natural Resources</p>
        <footer>
          <h5>
            They're pretty underground, but you've probably heard about them
          </h5>
        </footer>

        <section class="what-want">
          <h3>How can I help?</h3>
          <p>View All Reported sinkholes by county?</p>
          <button>
            <Link to="/view/county">View</Link>
          </button>
          <p>View all sinkholes in Florida?</p>
          <button>
            <Link to="/view">Search</Link>
          </button>
          <p>Report a suspected sinkhole?</p>
          <button>
            <Link to="/add">Add</Link>
          </button>
          <p>Find insurance companies near you?</p>
          <button>
            <Link to="/add">Add</Link>
          </button>
          <p>FAQ</p>
          <button>
            <Link to="/faq">Add</Link>
          </button>
        </section>
        <section class="featured-sinkhole">
          <h3>Random sinkhole</h3>
        </section>
      </main>
    </>
  )
}
