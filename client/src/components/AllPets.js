import React from 'react';
import { Link } from 'react-router-dom';
import Delete from './Delete';

const allPets = (props) => {
  const removeFromDom = id => {
    props.setAllPets(props.allPets.filter(pet => pet._id != id));
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        {
          props.allPets.map((pet, i) =>
            <tbody key={i}>
              <tr>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                <td>
                  <Link to={`/pet/onePet/${pet._id}`}><button>Details</button></Link>
                  <Link to={`/pet/edit/${pet._id}`}><button>Edit</button></Link>
                  <Delete id={pet._id} removeFromDom={removeFromDom} />
                </td>
              </tr>
            </tbody>
          )
        }
      </table>
    </>
  )
}

export default allPets;