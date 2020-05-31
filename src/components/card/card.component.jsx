import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h4>{props.monster.name}</h4>
      <p>{props.monster.email}</p>
    </div>
  );
};



/* ${props.monster.id} -> this number is a unique number taken from 
unique id from each monster from the API. This is the number to be changed
to generate unique monsters */
