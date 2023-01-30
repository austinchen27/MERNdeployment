import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PetForm from '../components/PetForm';
import axios from 'axios';

const Edit = (props) => {
  const [ name, setName ] = useState("")
  const [ type, setType ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ skillOne, setSkillOne ] = useState("")
  const [ skillTwo, setSkillTwo ] = useState("")
  const [ skillThree, setSkillThree ] = useState("")

  const { id } = useParams()
  
  useEffect(() => {
    axios.get(`http://localhost:8001/api/onePet/${id}`)
      .then(res => {
        setType(res.data.type)
        setDescription(res.data.description)
        setSkillOne(res.data.skillOne)
        setSkillTwo(res.data.skillTwo)
        setSkillThree(res.data.skillThree)
        setName(res.data.name)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h1>Pet Shelter</h1>
      <Link to="/">Home</Link>
    <h2>Know a pet needing a home?</h2>
    { name.length > 0 && <PetForm isCreate={false} id={id} name={name} setName={setName} type={type} setType={setType} description={description} setDescription={setDescription} skillOne={skillOne} setSkillOne={setSkillOne} skillTwo={skillTwo} setSkillTwo={setSkillTwo} skillThree={skillThree} setSkillThree={setSkillThree} />}
    </>
  )
}

export default Edit;