import React from "react";

function PopupWithForm(props) {
  
  return(
    <section className={`popup popup_type_${props.name} ${props.isOpen && `popup_opened`}`}>
      <div className="popup__container">
        <h2 className="popup__header">{props.header}</h2>
        <form className="popup__form" name={props.name} onSubmit={props.onSubmit}>
          {props.children}
          <button type="submit" className={`popup__button-submit popup__button-submit_type_${props.name}`}>{props.buttonText}</button>
        </form>
        <button type="button" aria-label="Закрыть" className="popup__button-close" onClick={props.isClosed}></button>
      </div>
    </section>
  );
}

export default PopupWithForm;