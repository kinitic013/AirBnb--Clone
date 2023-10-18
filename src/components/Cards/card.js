import "./styles.css";
import StarIcon from "@mui/icons-material/Star";
import React, { useRef, useState } from 'react';
  
function Card(props) {
  return (
    <div className="card">
      <div classNmae="card-img-container">
        <img src={props.imgSrc[0]} alt="card-img" className="card-img"></img>
      </div>
      <div className="card-title">
        <div className="card-title-desc">{props.desc}</div>
        <div className="card-rating">
          <StarIcon fontSize="small" />
          {props.rating}
        </div>
      </div>
      <div className="card-date">{props.date}</div>
      <div className="card-price">
        <strong>₹{props.price}</strong>
      </div>
    </div>
  );
}
export default Card;




