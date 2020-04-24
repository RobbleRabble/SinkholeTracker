import React, { useState } from 'react'
import axios from 'axios'
import ReactMapGL, {
  Marker,
  Popup,
  GeolocateControl,
  NavigationControl,
} from 'react-map-gl'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
// import SinkholeAverageRating from './SinkholeAverageRating'
import PlaceSinkhole from '../images/placeholder_sinkhole.jpg'

const Sinkhole = props => {
  const { sinkhole } = props
  const [viewport, setViewport] = useState({
    // need to change width
    latitude: sinkhole.latitude,
    longitude: sinkhole.longitude,
    zoom: 12,
  })
  const [showPopup, setShowPopup] = useState(false)
  const markerClicked = sinkhole => {
    console.log('sinkhole clicked', sinkhole)
    setShowPopup(true)
  }

  // const [markers, setMarkers] = useState([])

  // const [newReviewText, setNewReviewText] = useState('')
  const [answer, setAnswer] = useState(false)
  // const [priorReviews, setPriorReviews] = useState({})
  const [reviews, setReviews] = useState(sinkhole.reviews)

  // const loadPrevReviews = async () => {
  //   const resp = await axios.get(`/api/sinkholes/${sinkhole.id}/reviews`)
  //   console.log(resp)
  //   setPriorReviews(resp.data)
  // }

  // useEffect(() => {
  //   loadPrevReviews()
  // }, [])

  const sendYesOrNoToApi = async () => {
    const resp = await axios.post(`/api/sinkholes/${sinkhole.id}/reviews`, {
      answer: answer,
      // comment: newReviewText,
    })
    console.log(resp.data)
    // update state with  the new data
    setReviews([resp.data, ...reviews])
  }
  // const yesCount = reviews.where(reviews.answer == true)

  // const saveSinkholeForUser = async () => {
  //   // tell our API 2 things,
  //   // Who is bookmarking the Sinkhole
  //   // what Sinkhole are we bookmarking
  //   const resp = await axios.post(
  //     `/api/bookmark/${Sinkhole.id}`,
  //     {},
  //     {
  //       headers: {
  //         Authorization: 'Bearer ' + localStorage.getItem('token'),
  //       },
  //     }
  //   )
  // }

  return (
    <main className="sinkhole-details">
      <img src={PlaceSinkhole} alt="Huh" />
      <section className="sinkhole-header">
        <h2>Details for {sinkhole.name}</h2>

        {/* <button className="directions-link">
          <FontAwesomeIcon icon={faMapMarkedAlt} />
        </button> */}
        <p>Description: {sinkhole.description}</p>
        <p className="coordinates">
          Coordinates (Latitude/Longitude): {sinkhole.latitude}{' '}
          {sinkhole.longitude}
        </p>
        {/* <p className="reviews">
          <SinkholeAverageRating reviews={reviews} />
        </p> */}
        <p className="address">Address: {sinkhole.fullAddress}</p>
        <p>County: {sinkhole.county}</p>
        <section className="map-container">
          <h2>{sinkhole.name} location</h2>
          <ReactMapGL
            className="single-map"
            height="100vh"
            width="auto"
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
                latitude={sinkhole.latitude}
                longitude={sinkhole.longitude}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setShowPopup(false)}
                offsetTop={-5}
              >
                <div className="popup-window">🚩{sinkhole.name}</div>
              </Popup>
            )}
            <Marker
              latitude={sinkhole.latitude}
              longitude={sinkhole.longitude}
              key={sinkhole.id}
              name={sinkhole.name}
            >
              <div onClick={() => markerClicked(sinkhole)}>🕳</div>
              {/* <div>🕳</div> */}
            </Marker>
            <NavigationControl />
          </ReactMapGL>
        </section>
        <section className="review">
          <h3>This sinkhole has {reviews.length} reviews.</h3>
          <h3>Is this a sinkhole?</h3>
          <button onClick={() => setAnswer(true)}>Yes!</button>
          <button onClick={() => setAnswer(false)}>Fake News!</button>
          <div className="vote-tally">
            <p>Total Votes</p>
            {/* THIS IS WHAT I WANT */}
            {/* <p>Yes votes: {yesCount}</p> */}
            <p>Yes votes:</p>
            <p>Nay votes:</p>
            <h4>You are voting {answer ? 'yes' : 'no'}</h4>
            <h5>Previous Comments about {sinkhole.name}</h5>
            <button onClick={sendYesOrNoToApi}>Cast Vote!</button>
            {/* <button>Cast Vote!</button> */}
          </div>
        </section>
      </section>
    </main>
  )
}

export default Sinkhole
