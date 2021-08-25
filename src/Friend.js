import React from 'react';
import Pet from './Pet.js';

export default function Friend(props) {
    console.log(props.information);
    var petsInFriend = props.information.pets.map((petList,index)=>{
        return (
        <div key={props.information.name + "-" + index}>
        <Pet pets={petList}/>
        </div>
    )})
    return (
        <div className="friendItem">
            <h1>Name: {props.information.name}</h1>
            <h3>Age: {props.information.age}</h3>
            <div className="petList">
                {petsInFriend}
            </div>
        </div>
    )
}
