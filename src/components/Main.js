import React from "react";

import Card from "./Card";
import api from "../utils/Api";

function Main(props) {

  const [userAvatar, patchProfilePicture] = React.useState('');
  const [userName, patchUserName] = React.useState('');
  const [userAbout, patchUserAbout] = React.useState('');

  const [cards, setCard] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then((data) => {
        const [userData, cardsData] = data;

        patchProfilePicture(userData.avatar);
        patchUserName(userData.name);
        patchUserAbout(userData.about);

        setCard(cardsData)
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
  }, []);

  return(
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container" onClick={props.openUserPicture}>
          <img src={userAvatar} className="profile__avatar" alt="Аватар профиля" />
        </div>
          <div className="profile__info">
            <div className="profile__name-container">
              <h1 className="profile__name">{userName}</h1>
              <button type="button" aria-label="Редактирование профиля" className="profile__button" onClick={props.openEdit}></button>
            </div>
            <p className="profile__job">{userAbout}</p>
          </div>
          <button type="button" aria-label="Добавить новую картинку" className="profile__button-add" onClick={props.openAddCard}></button>
        </section>
        <section className="photo-grid">
          <ul className="photo-grid__list">
            {cards.map((card, id) =>
              <Card 
                key={id}
                card={card}
                openCard={props.openCard}
              />
            )}
          </ul>
        </section>
      </main>
  );
}

export default Main;