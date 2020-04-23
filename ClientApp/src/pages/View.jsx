import React from 'react'

const View = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])
  const [markers, setMarkers] = useState([])

  const loadAllLocations = async () => {
    const resp = await axios.get('/api/sinkholes')
    console.log(resp)
    setMarkers(resp.data)
  }

  useEffect(() => {
    loadAllLocations()
  }, [])

  return <></>
}

export default View
