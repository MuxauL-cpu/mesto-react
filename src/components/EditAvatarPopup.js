import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [avatar, setAvatar] = React.useState(currentUser.avatar);

  React.useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser]);

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUpdateAvatar({ avatar });
  }

  function handleChangeAvatar(evt) {
    setAvatar(evt.target.value);
  }

  return(
    <PopupWithForm
      name="avatar"
      header="Обновить аватар"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      isClosed={props.isClosed}
      onSubmit={handleSubmit}
    >
      <label htmlFor="avatar-link" className="popup__label">
        <input className="popup__input popup__input_type_avatar-link" 
        type="url" 
        placeholder="Ссылка на картинку" 
        name="imageLink" 
        id="avatar-link" 
        onChange={handleChangeAvatar}
        required />
        <p className="avatar-link-error popup__input-error"></p>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;