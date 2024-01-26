import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`} onClick={props.onOverlay}>
      <div className="popup__container">
        <button className="popup__close-button" onClick={props.onClose} type="button"></button>
        <form className={`popup__form popup__form_type_${props.name}`} name={`${props.name}-form`} onSubmit={props.onSubmit} noValidate>
        <h2 className={props.isDeleteForm ? "popup__title popup__title_type_delete_confirm" : "popup__title"}>{props.title}</h2>
          {props.children} 
          <button className={`popup__submit-button ${props.isSubmitDisabled ? 'popup__submit-button_invalid' : ''}`} id={props.submitId} type="submit" disabled={props.isSubmitDisabled}>
            {props.submitText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
