import React, { useState } from 'react'
import axios from 'axios'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
// import SinkholeAverageRating from './SinkholeAverageRating'
import PlaceSinkhole from '../images/placeholder_sinkhole.jpg'

const Sinkhole = props => {
  const { sinkhole } = props
  // const [viewport, setViewport] = useState({
  //   width: 400,
  //   height: 400,
  //   latitude: this.prop.latitude,
  //   longitude: this.prop.longitude,
  //   zoom: 8,
  // })
  // const [markers, setMarkers] = useState([])

  // const [newReviewText, setNewReviewText] = useState('')
  // const [reviewScore, setReviewScore] = useState(0)
  // const [reviews, setReviews] = useState(Sinkhole.reviews)

  // const sendReviewToApi = async () => {
  //   const resp = await axios.post(`/api/Sinkholes/${Sinkhole.id}/reviews`, {
  //     rating: reviewScore,
  //     comment: newReviewText,
  //   })
  //   console.log(resp.data)
  //   // update state with  the new data
  //   setReviews([resp.data, ...reviews])
  // }

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
        <h1>Details for {sinkhole.name}</h1>

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
        <p className="address">
          Address: {sinkhole.fullAddress} {sinkhole.county}
        </p>
      </section>
    </main>
  )
}

export default Sinkhole
