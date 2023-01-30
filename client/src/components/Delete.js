import React from 'react';
import axios from 'axios';

const Delete = (props) => {
  const { removeFromDom } = props

  const deleteButton = (id) => {
    axios.delete(`http://localhost:8001/api/pet/delete/${id}`)
    .then(res => {
      removeFromDom(id)
    })
    .catch(err => console.log(err))
  }

  return (
    <button onClick={(e) => { deleteButton(props.id) }}>Delete</button>
  )

}

export default Delete;