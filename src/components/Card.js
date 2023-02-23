import React from "react";

function Card({card, openCard, deleteClick}) {

  function handleCardClick() {
    openCard(card);
  }
  return(
    <li className="elements__card">
      <img src={card.link} className="elements__image" alt={card.name} onClick={handleCardClick} />
      <button type="button" aria-label="Delete" className="elements__delete-button" onClick={deleteClick}></button>
      <div className="elements__description-container">
        <h2 className="elements__description-title">{card.name}</h2>
          <div className="elements__like-container">
            <button type="button" aria-label="Лайк" className="elements__button-like"></button>
            <div className="elements__like-counter">{card.likes.length}</div>
          </div>
      </div>
    </li>
  )
}

export default Card;