import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AllPets from '../components/AllPets';

const Main = (props) => {
  const [ allPets, setAllPets ] = useState([])
  const [ loaded, setLoaded ] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8001/api/allPets')
      .then(res => {
        setAllPets(res.data)
        setLoaded(true)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h1>Pet Shelter</h1>
      <Link to='/pet/create'>Add a pet to the shelter</Link>
      {
        loaded && <AllPets allPets={allPets} setAllPets={setAllPets} />
      }
    </>
  )
}

export default Main;