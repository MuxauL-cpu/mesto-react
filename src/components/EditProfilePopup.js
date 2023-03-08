import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState(currentUser.name);
  const [description, setDescription] = React.useState(currentUser.about);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(evt) {
    evt.preventDefault();

    console.log(currentUser.name);
    props.onUpdateUser({ name, about: description });
  }

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  return(
    <PopupWithForm 
      name="user"
      header="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      isClosed={props.isClosed}
      onSubmit={handleSubmit}
    >
      <label htmlFor="user-name" className="popup__label"></label>
        <input 
          className="popup__input popup__input_type_name" 
          placeholder="Имя" 
          name="UserName" 
          id="user-name" 
          minLength="2" 
          maxLength="40" 
          onChange={handleChangeName} 
          //value={name}
          required />
        <p className="user-name-error popup__input-error"></p>
      <label htmlFor="user-job" className="popup__label">
        <input 
          className="popup__input popup__input_type_job"
          placeholder="О себе"
          name="UserJob"
          id="user-job"
          minLength="2"
          maxLength="200"
          onChange={handleChangeDescription}
          //value={description}
          required />
        <p className="user-job-error popup__input-error"></p>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;