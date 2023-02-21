import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';

function App() {
  const [isProfileEditOpen, setProfileEditOpen] = React.useState(false);
  const [isAddCardFormOpen, setAddCardFormOpen] = React.useState(false);
  const [isUserAvatarFormOpen, setUserAvatarFormOpen] = React.useState(false);

  const [currentCard, setCurrentCard] = React.useState({ isOpen: false });

  function handleCardClick(card) {
    setCurrentCard({ isOpen: true, ...card});
  }


  function handleUserPopupOpen() {
    setProfileEditOpen(!isProfileEditOpen);
  }
  function handleUserPopupClose() {
    setProfileEditOpen(false);
  }

  function handleAddCardFormOpen() {
    setAddCardFormOpen(!isAddCardFormOpen);
  }
  function handleAddCardFormClose() {
    setAddCardFormOpen(false);
  }

  function handleUserAvatarFormOpen() {
    setUserAvatarFormOpen(!isUserAvatarFormOpen);
  }
  function handleUserAvatarFormClose() {
    setUserAvatarFormOpen(false);
  }

  return (
    <>
      <Header />
      <Main 
        openEdit={handleUserPopupOpen} 
        openAddCard={handleAddCardFormOpen}
        openUserPicture={handleUserAvatarFormOpen}
      />
      <Footer />
      <PopupWithForm 
        name="avatar"
        header="Обновить аватар"
        isOpen={isUserAvatarFormOpen}
        isClosed={handleUserAvatarFormClose}
        children={
          <>
            <label htmlFor="avatar-link" className="popup__label">
              <input className="popup__input popup__input_type_avatar-link" type="url" placeholder="Ссылка на картинку" name="imageLink" id="avatar-link" required />
              <p className="avatar-link-error popup__input-error"></p>
            </label>
          </>
        }
      />
      <PopupWithForm 
        name="user"
        header="Редактировать профиль"
        isOpen={isProfileEditOpen}
        isClosed={handleUserPopupClose}
        children={
          <>
            <label htmlFor="user-name" className="popup__label"></label>
              <input className="popup__input popup__input_type_name" placeholder="Имя" name="UserName" id="user-name" minLength="2" maxLength="40" required />
              <p className="user-name-error popup__input-error"></p>
            <label htmlFor="user-job" className="popup__label">
              <input className="popup__input popup__input_type_job" placeholder="О себе" name="UserJob" id="user-job" minLength="2" maxLength="200" required />
              <p className="user-job-error popup__input-error"></p>
            </label>
          </>
        }
      />
      <PopupWithForm 
        name="card-editor"
        header="Новое место"
        isOpen={isAddCardFormOpen}
        isClosed={handleAddCardFormClose}
        children={
          <>
            <label htmlFor="user-name" className="popup__label"></label>
              <input className="popup__input popup__input_type_name" placeholder="Имя" name="UserName" id="user-name" minLength="2" maxLength="40" required />
              <p className="user-name-error popup__input-error"></p>
            <label htmlFor="user-job" className="popup__label">
              <input className="popup__input popup__input_type_job" placeholder="О себе" name="UserJob" id="user-job" minLength="2" maxLength="200" required />
              <p className="user-job-error popup__input-error"></p>
            </label>
          </>
        }
      />
      <PopupWithImage 
        card={currentCard}
      />
      <section className="popup popup_type_card-delete">
        <div className="popup__container">
          <h2 className="popup__header">Вы уверены?</h2>
          <form className="popup__form popup__form_type_delete-cards" name="popupCardsDeleteForm" noValidate>
            <button type="submit" className="popup__button-submit popup__button-submit_type_delete-cards">Да</button>
          </form>
          <button type="button" aria-label="Закрыть" className="popup__button-close"></button>
        </div>
      </section>
    </>
  );
}

export default App;
