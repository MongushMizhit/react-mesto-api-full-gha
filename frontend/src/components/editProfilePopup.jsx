import React, { useState, useContext, useEffect } from 'react';
import PopupWithForm from './popupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, onOverlay }) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser?.name || ''); // Используем имя из контекста или пустую строку
  const [description, setDescription] = useState(currentUser?.about || ''); // Используем описание из контекста или пустую строку

  useEffect(() => {
    // Обновление переменных состояния при изменении контекста
    setName(currentUser?.name || '');
    setDescription(currentUser?.about || '');
  }, [currentUser]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     // Передаем значения управляемых компонентов во внешний обработчик
     onUpdateUser({
      name,
      about: description,
    });
  };

  return (
    <PopupWithForm
      name="popup-profile"
      title="Редактировать профиль"
      submitText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onOverlay={onOverlay}
      onSubmit={handleSubmit}
      
    >
      <label className="popup__form">
        <input
          className="popup__input popup__input_type_name"
          id="name-card"
          minLength="2"
          maxLength="40"
          type="text"
          name="name"
          placeholder="Укажите имя"
          value={name}
          onChange={handleNameChange}
          required
        />
        <span id="name-card-error" className="error"></span>
        <input
          className="popup__input popup__input_type_job"
          id="job-card"
          minLength="2"
          maxLength="200"
          type="text"
          name="info"
          placeholder="Род деятельности"
          value={description}
          onChange={handleDescriptionChange}
          required
        />
        <span id="job-card-error" className="error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
