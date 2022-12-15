import React from "react";
import "./MyCard.css";

function MyCard(props) {
  return (
    <div className="my-card">
      <img src={props.cardUrl} alt={props.cardUrl} />
    </div>
  );
}

export default MyCard;
