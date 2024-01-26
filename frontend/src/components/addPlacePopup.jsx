import React, { useEffect, useRef } from 'react';
import PopupWithForm from './popupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit, onOverlay }) {
  const titleRef = useRef();
  const linkRef = useRef();

  useEffect(() => {
    titleRef.current.value = '';
    linkRef.current.value = '';
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onAddPlaceSubmit({
      name: titleRef.current.value,
      link: linkRef.current.value,
    });
  };

  return (
    <PopupWithForm name="card-popup" title="Новое место" submitText="Создать" isOpen={isOpen} onClose={onClose} onOverlay={onOverlay} onSubmit={handleSubmit}>
      <label className="popup__form" id="card-popup__form" name="add-form" noValidate>
        <input ref={titleRef} className="popup__input popup__input_type_title" id="title-card" minLength="2" maxLength="30" type="text" name="name" placeholder="Название" required />
        <span id="title-card-error" className="error"></span>
        <input ref={linkRef} className="popup__input popup__input_type_link" id="link-card" type="url" name="link" placeholder="Ссылка на картинку" required />
        <span id="link-card-error" className="error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;