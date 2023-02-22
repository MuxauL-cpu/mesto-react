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

  const [currentCard, setCurrentCard] = React.useState({});
  const [isCardOpen, setCardOpen] = React.useState(false);

  function handleCardClick(cardsData) {
    setCardOpen(!isCardOpen);
    setCurrentCard(cardsData);
  }

  function handleUserPopupOpen() {
    setProfileEditOpen(!isProfileEditOpen);
  }

  function handleAddCardFormOpen() {
    setAddCardFormOpen(!isAddCardFormOpen);
  }

  function handleUserAvatarFormOpen() {
    setUserAvatarFormOpen(!isUserAvatarFormOpen);
  }

  function closeAllPopups() {
    setCardOpen(false);
    setProfileEditOpen(false);
    setAddCardFormOpen(false);
    setUserAvatarFormOpen(false);
  }
  return (
    <>
      <Header />
      <Main 
        openEdit={handleUserPopupOpen} 
        openAddCard={handleAddCardFormOpen}
        openUserPicture={handleUserAvatarFormOpen}
        openCard={handleCardClick}
      />
      <Footer />
      <PopupWithForm 
        name="avatar"
        header="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isUserAvatarFormOpen}
        isClosed={closeAllPopups}
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
        buttonText="Сохранить"
        isOpen={isProfileEditOpen}
        isClosed={closeAllPopups}
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
        buttonText="Создать"
        isOpen={isAddCardFormOpen}
        isClosed={closeAllPopups}
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
        isOpen={isCardOpen}
        isClosed={closeAllPopups}
      />
      <PopupWithForm 
        name="card-delete"
        header="Вы уверены?"
        buttonText="Да"
        children={<></>}
      />
    </>
  );
}

export default App;
