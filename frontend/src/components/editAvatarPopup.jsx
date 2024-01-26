import React, { useEffect, useRef } from 'react';
import PopupWithForm from './popupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, onOverlay }) {
  const avatarRef = useRef();

  useEffect(() => {
    avatarRef.current.value = ''; 
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  };

  return (
    <PopupWithForm
      name="popup-avatar"
      title="Обновить аватар"
      submitText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onOverlay={onOverlay}
    >
      <label className="popup__form popup__form-avatar">
        <input
          className="popup__input popup__input_type_avatar"
          id="avatar-input"
          type="url"
          name="avatar"
          placeholder="Ссылка на аватар"
          ref={avatarRef}
          required
        />
        <span id="avatar-input-error" className="error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
