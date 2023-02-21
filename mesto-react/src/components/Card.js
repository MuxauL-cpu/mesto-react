import React from "react";

function Card(props) {
  function handleCardClick() {
    console.log(props.card.link);
    console.log(props.card.name);
  }
  return(
    <li className="elements__card">
      <img src={props.card.link} className="elements__image" alt={props.card.name} onClick={handleCardClick} />
      <button type="button" aria-label="Delete" className="elements__delete-button"></button>
      <div className="elements__description-container">
        <h2 className="elements__description-title">{props.card.name}</h2>
          <div className="elements__like-container">
            <button type="button" aria-label="Лайк" className="elements__button-like"></button>
            <div className="elements__like-counter">{props.card.likes.length}</div>
          </div>
      </div>
    </li>
  )
}

export default Card;