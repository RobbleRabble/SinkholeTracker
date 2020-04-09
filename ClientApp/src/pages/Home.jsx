import React, { useState, useEffect } from 'react'
import ReactMapGL from 'react-map-gl'
import axios from 'axios'

import { Link } from 'react-router-dom'

export function Home() {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  })
  const [showPopup, setShowPopup] = useState(false)
  const [selectedPlace, setSelectedPlace] = useState({})
  const [markers, setMarkers] = useState([])

  const loadAllLocations = async () => {
    const resp = await axios.get('/api/location')
    setMarkers(resp.data)
  }

  useEffect(() => {
    loadAllLocations()
  }, [])

  const markerClicked = place => {
    console.log('marker clcked', place)
    setSelectedPlace(place)
    setShowPopup(true)
  }

  // const addNewLocation = async () => {
  //   // do the API
  //   const resp = await axios.post('/api/location', {
  //     description: 'from UI',
  //     fullAddress: locationAddress,
  //   })
  //   if (resp.status === 201) {
  //     // update the markers array
  //     setMarkers(prevMarkers => {
  //       return [resp.data, ...prevMarkers]
  //     })
  //   }
  // }

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
        <section className="map-container">
          <ReactMapGL
            {...viewport}
            onViewportChange={setViewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          >
            {/* {showPopup && (
              <Popup
                latitude={selectedPlace.latitude}
                longitude={selectedPlace.longitude}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setShowPopup(false)}
                offsetTop={-5}
              >
                <div className="popup-window">
                  🌧 {selectedPlace.description}
                </div>
              </Popup>
            )} */}
            {/* {markers.map(place => {
              return (
                <Marker
                  latitude={place.latitude}
                  longitude={place.longitude}
                  key={place.id}
                >
                  <div onClick={() => markerClicked(place)}>🌂</div>
                </Marker>
              )
            })} */}
          </ReactMapGL>
        </section>
      </main>
    </>
  )
}
