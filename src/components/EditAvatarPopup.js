import { useEffect, useState, useContext } from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const currentUser = useContext(CurrentUserContext);

  const [avatar, setAvatar] = useState(currentUser.avatar);

  useEffect(() => {
    setAvatar(currentUser.avatar);
    setAvatar('');
  }, [props.isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUpdateAvatar({ avatar });

    setAvatar('');
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
        value={avatar || ''}
        required />
        <p className="avatar-link-error popup__input-error"></p>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;