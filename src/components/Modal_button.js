import React from "react";

import close from "./img/close.png"


export default function Modal_button() {
    return (
        <div class="modal" id="contact-modal">
            <div class="modal__content">
                <form class="form " action="/" method="POST">
                    <div class="form__group form__group--md">
                        <input class="form__control" type="text" placeholder="Ваше имя" />
                        <span class="form__line"></span>
                    </div>
                    <div class="form__group form__group--md">
                        <input class="form__control" type="email" placeholder="e-mail" />
                        <span class="form__line"></span>
                    </div>
                    <div class="form__group form__group--md">
                        <textarea class="form__control form__control--textarea" placeholder="Текст сообщения"></textarea>
                        <span class="form__line"></span>
                    </div>
                    <div class="form__footer ">
                        <div class="form__group form__group--md">
                            <button class="btn btn--blue btn--rounded btn--sm" type="submit">Отправить</button>
                        </div>
                    </div>
                </form>
                <button class="modal__close" type="button">
                    <img src={close} alt="" />
                </button>
            </div>
        </div>
    )
}