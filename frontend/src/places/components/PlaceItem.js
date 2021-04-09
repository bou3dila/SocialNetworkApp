import React from "react";

import Card from "../../shared/components/UIElements/Card/Card";
import "./PlaceItem.css";

const PlaceItem = (props) => {
  return (
    <Card>
      <li className="place-item">
        <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="place-item__info">
          <h1>{props.title}</h1>
          <h2>{props.address}</h2>
          <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
          <button>VIEW ON MAP</button>
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
      </li>
    </Card>
  );
};

export default PlaceItem;
