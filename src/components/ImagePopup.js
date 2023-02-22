import React from "react";

function ImagePopup(props) {
  return(
    <section className={`popup popup_type_open-image ${props.isOpen ? `popup_opened` : ''}`}>
      <figure className="popup__figure">
        <button type="button" aria-label="Закрыть" className="popup__button-close" onClick={props.isClosed}></button>
        <img src={props.card.link} alt={props.card.name} className="popup__image" />
        <figcaption className="popup__figcaption">{props.card.name}</figcaption>
      </figure>
    </section>
  )
}

export default ImagePopup;