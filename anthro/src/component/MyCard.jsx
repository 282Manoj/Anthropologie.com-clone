import React from "react";
import "./MyCard.css";

function MyCard(props) {
  return (
    <div className="my-card">
      <img src={props.cardUrl} alt={props.cardUrl} />
      {/* {props.cardNo} */}
    </div>
  );
}

export default MyCard;
