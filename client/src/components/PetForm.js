import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PetForm = (props) => {
  const navigate = useNavigate()

  const [errors, setErrors] = useState([])
  const [nameError, setNameError] = useState()
  const [name, setName] = useState(props.name)
  const [type, setType] = useState(props.type)
  const [description, setDescription] = useState(props.description)
  const [skillOne, setSkillOne] = useState(props.skillOne)
  const [skillTwo, setSkillTwo] = useState(props.skillTwo)
  const [skillThree, setSkillThree] = useState(props.skillThree)

  const handleSubmit = e => {
    console.log("hihi")
    e.preventDefault()
    console.log("we are here")
    axios.post('http://localhost:8001/api/createPet', {
      name: name,
      type: type,
      description: description,
      skillOne: skillOne,
      skillTwo: skillTwo,
      skillThree: skillThree
    })
      .then(res => {
        console.log(res)
        navigate('/')
      })
      .catch(err => {
        console.log(err)
        console.log("hihi")
        const errorResponse = err.response.data.errors
        const errArr = []
        for (const key of Object.keys(errorResponse)) {
          errArr.push(errorResponse[key].message)
        }
        setErrors(errArr)
      })
  }

  const handleEdit = e => {
    e.preventDefault()
      axios.put(`http://localhost:8001/api/editPet/${props.id}`, {
        name: name,
        type: type,
        description: description,
        skillOne: skillOne,
        skillTwo: skillTwo,
        skillThree: skillThree
      })
        .then(res => {
          console.log(res)
          navigate('/')
        })
        .catch(err => {
          const errorResponse = err.response.data.errors
          const errArr = []
          for (const key of Object.keys(errorResponse)) {
            errArr.push(errorResponse[key].message)
          }
          setErrors(errArr)
        })
    }

  return (
    <form onSubmit={props.isCreate ? handleSubmit : handleEdit}>
      {
        errors.map((err, i) => <p key={i}>{err}</p>)
      }
      <div>
        <label>Name:</label>
        <input type="text" onChange={e => setName(e.target.value)} value={name} />
      </div>
      <div>
        <label>Type: </label>
        <input type="text" onChange={e => setType(e.target.value)} value={type} />
      </div>
      <div>
        <label>Description: </label>
        <input type="text" onChange={e => setDescription(e.target.value)} value={description} />
      </div>
      <div>
        <label>Skill 1: </label>
        <input type="text" onChange={e => setSkillOne(e.target.value)} value={skillOne} />
      </div>
      <div>
        <label>Skill 2: </label>
        <input type="text" onChange={e => setSkillTwo(e.target.value)} value={skillTwo} />
      </div>
      <div>
        <label>Skill 3: </label>
        <input type="text" onChange={e => setSkillThree(e.target.value)} value={skillThree} />
      </div>
      <button>Submit</button>
    </form>
  )
}

export default PetForm;
