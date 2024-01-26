import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/Api';

function Card({ card, onCardClick, onCardLike, onDeleteClick }) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner === currentUser?._id;
  const isLiked = card.likes.some(id => id === currentUser?._id);

  const cardLikeButtonClassName = `element__like-button ${isLiked && 'element__like-button_active'}`;

  const handleLikeClick = () => {
    onCardLike(card);
  };

  const handleDeleteClick = () => {
    onDeleteClick(card._id);
  };

  return (
    <article className="element">
      <img
        className="element__image"
        src={card.link}
        alt={card.name}
        style={{ backgroundImage: `url(${card.link})` }}
        onClick={() => onCardClick(card)}
      />
      {isOwn && <button className='element__delete-button' onClick={handleDeleteClick} />}
      <div className="element__info-container">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-container">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
          <p className="element__like-number">{card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;


