import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const AddHole = () => {
  const [sinkhole, setSinkhole] = useState({})
  const [wasSuccessfullyCreated, setWasSuccessfullyCreated] = useState({
    shouldRedirect: false,
    newHoleInformation: {},
  })

  const updateHoleData = e => {
    const key = e.target.name
    const value = e.target.value
    setSinkhole(prevHole => {
      prevHole[key] = value
      return prevHole
    })
  }

  const addHoleToApi = async () => {
    console.log('pushed the button!', sinkhole)
    const resp = await axios.post('/api/sinkholes', {
      ...sinkhole,
      latitude: parseFloat(sinkhole.latitude),
      longitude: parseFloat(sinkhole.longitude),
    })
    if (resp.status === 201) {
      console.log('Got here, why no API tho')
      // do something something else
      setWasSuccessfullyCreated({
        shouldRedirect: true,
        newHoleInformation: resp.data,
      })
    } else {
      return console.log('error', sinkhole)
    }
  }

  if (wasSuccessfullyCreated.shouldRedirect) {
    return (
      <Redirect
        to={{
          pathname: `/sinkholes/${wasSuccessfullyCreated.newHoleInformation.id}`,
          state: { sinkhole: wasSuccessfullyCreated.newHoleInformation },
        }}
      />
    )
  } else {
    return (
      <>
        <main>
          <section>
            <label htmlFor="">Name</label>
            <input type="text" name="name" onChange={updateHoleData} />
          </section>
          <section>
            <label htmlFor="">Description</label>
            <input type="text" name="description" onChange={updateHoleData} />
          </section>
          <section>
            <label htmlFor="">Formation</label>
            <input type="text" name="formation" onChange={updateHoleData} />
          </section>
          <section>
            <label htmlFor="">County</label>
            <input type="text" name="county" onChange={updateHoleData} />
          </section>
          <section>
            <label htmlFor="">Latitude</label>
            <input type="text" name="latitude" onChange={updateHoleData} />
          </section>
          <section>
            <label htmlFor="">Longitude</label>
            <input type="text" name="longitude" onChange={updateHoleData} />
          </section>
          <section>
            <label htmlFor="">Address</label>
            <input type="text" name="fullAddress" onChange={updateHoleData} />
          </section>
          <button onClick={addHoleToApi}>Add The Sinkhole!</button>
        </main>
      </>
    )
  }
}
export default AddHole
