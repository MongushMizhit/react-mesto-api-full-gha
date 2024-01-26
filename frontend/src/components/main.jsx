import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './card';

function Main(props) {
  const currentUser = useContext(CurrentUserContext);
    
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar-image" style={{ backgroundImage: `url(${currentUser?.avatar || ''})` }} alt="аватар" />
          <button className="profile__avatar-edit" type="button" onClick={props.onEditAvatarClick}></button>
        </div>
        <div className="profile__info">
          <div className="profile__info-container">
            <h1 className="profile__nickname">{currentUser?.name}</h1>
            <p className="profile__description">{currentUser?.about}</p>
          </div>
          <button className="profile__edit-button profile__button-opened" type="button" onClick={props.onEditProfileClick}></button>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlaceClick}></button>
      </section>

      <section className="elements">
        {props.cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onDeleteClick={props.onDeleteClick}/>
        ))}
      </section>
    </main>
  );
}

export default Main;
