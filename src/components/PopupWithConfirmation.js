import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupWithConfirmation(props) {

  return(
    <PopupWithForm 
      name="card-delete"
      header="Вы уверены?"
      buttonText="Да"
      isOpen={props.isOpen}
      isClosed={props.isClosed}
      onSubmit={props.onSubmit}
    />
  );
}

export default PopupWithConfirmation;