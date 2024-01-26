import React from 'react';
import PopupWithForm from './popupWithForm';

function DeletePopup({isOpen, onClose, onOverlay, onDeleteConfirm}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onDeleteConfirm();
      };

    return(
      <PopupWithForm name="delete-popup" title="Вы&nbsp;уверены?" submitText="Да" isOpen={isOpen} onClose={onClose} onOverlay={onOverlay} onSubmit={handleSubmit} isDeleteForm={true}>
</PopupWithForm> 
    )
}

export default DeletePopup;