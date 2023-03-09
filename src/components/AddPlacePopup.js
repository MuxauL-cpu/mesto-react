import { useEffect, useState } from 'react';
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {

  const [nameInput, setNameInput] = useState('');
  const [linkInput, setLinkInput] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onAddCard({ name: nameInput, link: linkInput });
  }

  useEffect(() => {
    setNameInput('');
    setLinkInput('');
  }, [props.isOpen])

  function handleChangeName(evt) {
    setNameInput(evt.target.value);
  }

  function handleChangeLink(evt) {
    setLinkInput(evt.target.value);
  }

  return(
    <PopupWithForm 
      name="card-editor"
      header="Новое место"
      buttonText="Создать"
      isOpen={props.isOpen}
      isClosed={props.isClosed}
      onSubmit={handleSubmit}
    >
      <label htmlFor="user-name" className="popup__label"></label>
        <input 
          className="popup__input popup__input_type_name" 
          placeholder="Название" 
          name="UserName" 
          id="user-name" 
          minLength="2" 
          maxLength="40" 
          onChange={handleChangeName} 
          value={nameInput || ''}
          required 
        />
        <p className="user-name-error popup__input-error"></p>
      <label htmlFor="user-job" className="popup__label">
        <input 
          className="popup__input popup__input_type_job" 
          placeholder="URL" 
          name="UserJob" 
          id="user-job" 
          minLength="2" 
          maxLength="200" 
          onChange={handleChangeLink} 
          value={linkInput || ''}
          required 
        />
        <p className="user-job-error popup__input-error"></p>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;