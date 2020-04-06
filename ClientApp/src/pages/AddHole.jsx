import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const AddHole = () => {
  const [hole, setHole] = useState({})
  const [wasSuccessfullyCreated, setWasSuccessfullyCreated] = useState({
    shouldRedirect: false,
    newHoleInformation: {},
  })

  const updateHoleData = e => {
    const key = e.target.name
    const value = e.target.value
    setHole(prevHole => {
      prevHole[key] = value
      return prevHole
    })
  }

  const addHoleToApi = async () => {
    console.log('adding', hole)
    const resp = await axios.post('/api/trails', hole)
    if (resp.status === 201) {
      // do something something else
      setWasSuccessfullyCreated({
        shouldRedirect: true,
        newHoleInformation: resp.data,
      })
    } else {
      // do something else here
    }
  }

  if (wasSuccessfullyCreated.shouldRedirect) {
    return (
      <Redirect
        to={{
          pathname: `/hole/${wasSuccessfullyCreated.newHoleInformation.id}`,
          state: { hole: wasSuccessfullyCreated.newHoleInformation },
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
            <label htmlFor="">Grade</label>
            <input type="text" name="grade" onChange={updateHoleData} />
          </section>
          <section>
            <label htmlFor="">Route Type</label>
            <input type="text" name="routeType" onChange={updateHoleData} />
          </section>
          <section>
            <label htmlFor="">Address</label>
            <input type="text" name="address" onChange={updateHoleData} />
          </section>
          <section>
            <label htmlFor="">City</label>
            <input type="text" name="city" onChange={updateHoleData} />
          </section>
          <section>
            <label htmlFor="">State</label>
            <input type="text" name="state" onChange={updateHoleData} />
          </section>
          <button onClick={addTrailToApi}>Add hole</button>
        </main>
      </>
    )
  }
}
export default AddHole
