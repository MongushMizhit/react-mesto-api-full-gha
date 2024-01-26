import React from 'react';

const ImagePopup = ({ card, onClose, onOverlay }) => {
  return (
    <div className={`popup popup-photo ${card ? 'popup_opened' : ''}`} onClick={onOverlay}>
      <div className="popup__image-container">
        <img className="popup__image" src={card?.link || ''} alt={card?.name || ''} />
        <p className="popup__image-caption">{card?.name || ''}</p>
        <button className="popup__close-button popup__close-button_photo" type="button" onClick={onClose}></button>
      </div>
    </div>
  );
};


export default ImagePopup;
