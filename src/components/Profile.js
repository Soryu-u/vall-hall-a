import React from "react"

import avatar from './img/avatar.jpg'



export default function Profile() {
    return (
        <div className="profile__page">
            <h1 className="page__title">Профиль</h1>



            <form className="form" action="/" method="POST">
                <div className="cabinet">
                    <div className="cabinet__form">
                        <div className="form__group form__group--md">
                            <input className="form__control" type="text" placeholder="Ваше имя" value="Szpaku" />
                            <span className="form__line"></span>
                        </div>
                        <div className="form__group form__group--md">
                            <input className="form__control" type="email" placeholder="e-mail"
                                value="collages447@gmail.com" />
                            <span className="form__line"></span>
                        </div>
                        <div className="form__group form__group--md">
                            <input className="form__control" type="password" placeholder="Новый пароль" />
                            <span className="form__line"></span>
                        </div>
                        <div className="form__group form__group--md">
                            <input className="form__control" type="password" placeholder="Подтвердите пароль" />
                            <span className="form__line"></span>
                        </div>
                    </div>
                    <div className="cabinet__avatar">
                        <img src={avatar} alt="" />

                        <label className="cabinet__file">
                            <input type="file" />
                            выбрать аватар
                        </label>
                    </div>
                </div>


                <div className="form__footer">

                    <button className="btn btn--blue btn--rounded btn--sm" type="submit">Сохранить</button>


                </div>


            </form>

        </div>
    )
}