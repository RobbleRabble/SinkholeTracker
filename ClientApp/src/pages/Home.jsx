import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, Popup, GeolocateControl } from 'react-map-gl'
import axios from 'axios'

import { Link } from 'react-router-dom'

export function Home() {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 28.0395,
    longitude: -81.94786,
    zoom: 8,
  })
  const [showPopup, setShowPopup] = useState(false)
  const [selectedPlace, setSelectedPlace] = useState({})
  const [markers, setMarkers] = useState([])

  const loadAllLocations = async () => {
    const resp = await axios.get('/api/sinkholes')
    console.log(resp)
    setMarkers(resp.data)
  }

  useEffect(() => {
    loadAllLocations()
  }, [])

  const markerClicked = place => {
    console.log('sinkhole clicked', place)
    setSelectedPlace(place)
    setShowPopup(true)
  }

  // const data = [
  //   { latitude: 27.9767, longitude: -82.3403, text: 'A' },
  //   { latitude: 27.8767, longitude: -82.4403, text: 'B' },
  //   { latitude: 27.988, longitude: -82.3453, text: 'C' },
  //   { latitude: 28.033, longitude: -81.9453, text: 'D' },
  // ]

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
          <p>View all sinkholes in database?</p>
          <button>
            <Link to="/view/all">View</Link>
          </button>
          <p>Report a suspected sinkhole?</p>
          <button>
            <Link to="/add">Add</Link>
          </button>
          <p>Find insurance companies near you?</p>
          <button>
            <Link to="/insure">Claims</Link>
          </button>
          <p>Search For Sinkholes by name or county</p>
          <button>
            <Link to="/search">Search</Link>
          </button>
          <p>FAQ</p>
          <button>
            <Link to="/faq">Learn!</Link>
          </button>
        </section>
        <section class="featured-sinkhole">
          <h3>Random sinkhole</h3>
        </section>
        <section className="map-container">
          <ReactMapGL
            {...viewport}
            onViewportChange={setViewport}
            mapboxApiAccessToken={
              'pk.eyJ1IjoicmtpbGR1ZmYiLCJhIjoiY2s4czZna2lxMDFweDNsbzlyMmU0Ym50byJ9.DW5QkRiAEI4c4dEfA2eHyw'
            }
          >
            <GeolocateControl
              positionOptions={{ enableHighAccuracy: true }}
              trackUserLocation={true}
            ></GeolocateControl>
            >
            {showPopup && (
              <Popup
                latitude={selectedPlace.latitude}
                longitude={selectedPlace.longitude}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setShowPopup(false)}
                offsetTop={-5}
              >
                <div className="popup-window">🚩{selectedPlace.name}</div>
              </Popup>
            )}
            {markers.map(place => {
              return (
                <Marker
                  latitude={place.latitude}
                  longitude={place.longitude}
                  key={place.id}
                  name={place.name}
                >
                  <div onClick={() => markerClicked(place)}>🕳</div>
                </Marker>
              )
            })}
          </ReactMapGL>
        </section>
      </main>
    </>
  )
}
