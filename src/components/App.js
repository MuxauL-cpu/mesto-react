import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isProfileEditOpen, setProfileEditOpen] = React.useState(false);
  const [isAddCardFormOpen, setAddCardFormOpen] = React.useState(false);
  const [isUserAvatarFormOpen, setUserAvatarFormOpen] = React.useState(false);
  const [isConfirmationOpen, setConfirmationOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});
  const [isCardOpen, setCardOpen] = React.useState(false);

  function handleCardClick(cardsData) {
    setCardOpen(true);
    setSelectedCard(cardsData);
  }

  function handleConfirmationOpen() {
    setConfirmationOpen(true);
  }

  function handleUserPopupOpen() {
    setProfileEditOpen(true);
  }

  function handleAddCardFormOpen() {
    setAddCardFormOpen(true);
  }

  function handleUserAvatarFormOpen() {
    setUserAvatarFormOpen(true);
  }

  function closeAllPopups() {
    setCardOpen(false);
    setProfileEditOpen(false);
    setAddCardFormOpen(false);
    setUserAvatarFormOpen(false);
    setConfirmationOpen(false);
  }
  return (
    <>
      <Header />
      <Main 
        openEdit={handleUserPopupOpen} 
        openAddCard={handleAddCardFormOpen}
        openUserPicture={handleUserAvatarFormOpen}
        openCard={handleCardClick}
        openDelete={handleConfirmationOpen}
      />
      <Footer />
      <PopupWithForm
        name="avatar"
        header="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isUserAvatarFormOpen}
        isClosed={closeAllPopups}
      >
        <label htmlFor="avatar-link" className="popup__label">
          <input className="popup__input popup__input_type_avatar-link" type="url" placeholder="Ссылка на картинку" name="imageLink" id="avatar-link" required />
          <p className="avatar-link-error popup__input-error"></p>
        </label>
      </PopupWithForm>
      <PopupWithForm 
        name="user"
        header="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isProfileEditOpen}
        isClosed={closeAllPopups}
      >
        <label htmlFor="user-name" className="popup__label"></label>
          <input className="popup__input popup__input_type_name" placeholder="Имя" name="UserName" id="user-name" minLength="2" maxLength="40" required />
          <p className="user-name-error popup__input-error"></p>
        <label htmlFor="user-job" className="popup__label">
          <input className="popup__input popup__input_type_job" placeholder="О себе" name="UserJob" id="user-job" minLength="2" maxLength="200" required />
          <p className="user-job-error popup__input-error"></p>
        </label>
      </PopupWithForm>
      <PopupWithForm 
        name="card-editor"
        header="Новое место"
        buttonText="Создать"
        isOpen={isAddCardFormOpen}
        isClosed={closeAllPopups}
      >
        <label htmlFor="user-name" className="popup__label"></label>
          <input className="popup__input popup__input_type_name" placeholder="Имя" name="UserName" id="user-name" minLength="2" maxLength="40" required />
          <p className="user-name-error popup__input-error"></p>
        <label htmlFor="user-job" className="popup__label">
          <input className="popup__input popup__input_type_job" placeholder="О себе" name="UserJob" id="user-job" minLength="2" maxLength="200" required />
          <p className="user-job-error popup__input-error"></p>
        </label>
      </PopupWithForm>
      <ImagePopup 
        card={selectedCard}
        isOpen={isCardOpen}
        isClosed={closeAllPopups}
      />
      <PopupWithForm 
        name="card-delete"
        header="Вы уверены?"
        buttonText="Да"
        isOpen={isConfirmationOpen}
        isClosed={closeAllPopups}
      />
    </>
  );
}

export default App;
