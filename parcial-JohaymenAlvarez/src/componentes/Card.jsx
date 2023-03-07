import React from 'react'

const Card = ({nombre, apellido, preferencias}) => {

  return (
    <div>
        <h3> {nombre} </h3>
        <h3> {apellido} </h3>
        <h3> {nombre} {apellido} , Tu preferencia es {preferencias}</h3>
    </div>
  )
}

export default Card