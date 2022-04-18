import React from "react";

import close from "./img/close.png"


export default function Modal_button() {
    return (
        <div className="modal" id="contact-modal">
            <div className="modal__content">
                <form className="form " action="/" method="POST">
                    <div className="form__group form__group--md">
                        <input className="form__control" type="text" placeholder="Ваше имя" />
                        <span className="form__line"></span>
                    </div>
                    <div className="form__group form__group--md">
                        <input className="form__control" type="email" placeholder="e-mail" />
                        <span className="form__line"></span>
                    </div>
                    <div className="form__group form__group--md">
                        <textarea className="form__control form__control--textarea" placeholder="Текст сообщения"></textarea>
                        <span className="form__line"></span>
                    </div>
                    <div className="form__footer ">
                        <div className="form__group form__group--md">
                            <button className="btn btn--blue btn--rounded btn--sm" type="submit">Отправить</button>
                        </div>
                    </div>
                </form>
                <button className="modal__close" type="button">
                    <img src={close} alt="" />
                </button>
            </div>
        </div>
    )
}