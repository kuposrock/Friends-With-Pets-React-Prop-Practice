import React from 'react'

export default function Pet(props) {
    return (
        <div className="petItem">
        <div>Pet Name: {props.pets.name}</div>
        <div>Pet Breed: {props.pets.breed}</div>
        </div>
    )
}
