import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PetForm from '../components/PetForm';

const Create = (props) => {
  const [ name, setName ] = useState("")
  const [ type, setType ] = useState("")
  const [description, setDescription] = useState("")
  const [skillOne, setSkillOne] = useState("")
  const [skillTwo, setSkillTwo] = useState("")
  const [skillThree, setSkillThree] = useState("")

  return (
    <>
    <h1>Pet Shelter</h1>
    <Link to="/">Home</Link>
    <h2>Know a pet needing a home?</h2>
    <PetForm isCreate={true} name={name} setName={setName} type={type} setType={setType} description={description} setDescription={setDescription} skillOne={skillOne} setSkillOne={setSkillOne} skillTwo={skillTwo} setSkillTwo={setSkillTwo} skillThree={skillThree} setSkillThree={setSkillThree} />
    </>
  )

}

export default Create;