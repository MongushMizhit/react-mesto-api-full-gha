import React from "react";
import registration_successful from "../images/registration_successful.png";
import registration_failed from "../images/registration_failed.png";

function InfoTooltip(props) {
    const { isOpen, onClose, name, isSignIn } = props;
    const logo = isSignIn ? registration_successful : registration_failed;
    const message = isSignIn ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз.";

    return (
        <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
          <div className="popup__container popup__container-infotooltip">
            <button className="popup__close-button" onClick={onClose}></button>
            <img className="popup__sign-img" src={logo} alt="лого"/>
            <h2 className="popup__title">{message}</h2>
            </div>
          </div>
    );
}

export default InfoTooltip;
