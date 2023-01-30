import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Delete from '../components/Delete';
import axios from 'axios';

const Details = (props) => {
  const [pet, setPet] = useState({})
  const { id } = useParams()

  const [likes, setLikes] = useState(0)

  useEffect(() => {
    axios.get(`http://localhost:8001/api/onePet/${id}`)
      .then(res => setPet(res.data))
      .catch(err => console.log(err))
  }, [id])

  const removeFromDom = id => {
    props.setAllPets(props.allPets.filter(pet => pet._id != id));
  }

  return (
    <div>
      <>
        <h1>Pet Shelter</h1>
        <Link to="/">Home</Link>
        <h2>Details about: {pet.name}</h2>
        <Delete id={pet._id} removeFromDom={removeFromDom} />
        <p>Pet type: {pet.type}</p>
        <p>Description: {pet.description}</p>
        <p>Skills: {pet.skillOne}, {pet.skillTwo}, {pet.skillThree}</p>
      </>
      <div>
        <button onClick={() => setLikes(likes + 1)} value={likes}>Like {pet.name}</button>
        {likes} like(s)
      </div>
    </div>
  )

}

export default Details;
