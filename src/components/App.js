import React from 'react';
import { Provider } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import PopupWithConfirmation from './PopupWithConfirmation';

import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isProfileEditOpen, setProfileEditOpen] = React.useState(false);
  const [isAddCardFormOpen, setAddCardFormOpen] = React.useState(false);
  const [isUserAvatarFormOpen, setUserAvatarFormOpen] = React.useState(false);
  const [isConfirmationOpen, setConfirmationOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});
  const [isCardOpen, setCardOpen] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCard] = React.useState([]);
  const [currentCard, setCurrentCard] = React.useState({});

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then((data) => {
        const [userData, cardsData] = data;

        setCurrentUser(userData);

        setCard(cardsData)
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
  }, []);

  function handleCardClick(cardsData) {
    setCardOpen(true);
    setSelectedCard(cardsData);
  }

  function handleConfirmationOpen(card) {
    setConfirmationOpen(true);
    setCurrentCard(card)
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

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.createLike(card._id, !isLiked).then((newCard) => {
      setCard((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleUpdateUser({ name, about }) {
    api.patchUserInfo({ name, about })
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
  }

  function handleUpdateAvatar({ avatar }) {
    api.patchProfilePicture({ avatar })
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
  }

  function handleAddPlacePopup({ name, link }) {
    api.createCard({ name, link })
      .then((newCard) => {
        setCard([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
  }

  function handleDeleteCard(evt) {
    evt.preventDefault();

    api.deleteCard(currentCard._id)
      .then(() => {
        setCard(cards.filter((c) => c !== currentCard));
        closeAllPopups();
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main 
        openEdit={handleUserPopupOpen} 
        openAddCard={handleAddCardFormOpen}
        openUserPicture={handleUserAvatarFormOpen}
        openCard={handleCardClick}
        openDelete={handleConfirmationOpen}
        onCardLike={handleCardLike}
        cards={cards}
      />
      <Footer />
      <EditAvatarPopup 
        isOpen={isUserAvatarFormOpen}
        isClosed={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />
      <EditProfilePopup 
        isOpen={isProfileEditOpen} 
        isClosed={closeAllPopups} 
        onUpdateUser={handleUpdateUser}
      />
      <AddPlacePopup 
        isOpen={isAddCardFormOpen}
        isClosed={closeAllPopups}
        onAddCard={handleAddPlacePopup}
      />
      <ImagePopup 
        card={selectedCard}
        isOpen={isCardOpen}
        isClosed={closeAllPopups}
      />
      <PopupWithConfirmation 
        isOpen={isConfirmationOpen}
        isClosed={closeAllPopups}
        onSubmit={handleDeleteCard}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
