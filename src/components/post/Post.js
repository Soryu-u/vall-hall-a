import React from "react";

import postPrev from "./img/photo-4.jpg"
import share from "./img/share1.svg"
import ElAvatar from "./img/t-avatar.png"
import avatar from "./img/avatar.jpg"
import Elza from "./img/elza.jpg"


export default function Post() {
    return (
        <article className="post">

            <div className="post__actions">
                <a href="index.html">вернуться назад</a>
                <a href="#">
                    поделиться<img className="post__actions-icon" src={share} alt="поделиться" />
                </a>
            </div>




            <div className="post__header  post__header--open">
                <h1 className="post__title  post__title--mb0">
                    Как делают котики?
                </h1>

                <ul className="post__data">
                    <li className="post__data-item">
                        <time datetime="2020-11-23 12:23">23.11.2020</time>
                    </li>
                    <li className="post__data-item">
                        <a href="#">из жизни котиков</a>
                    </li>
                </ul>
            </div>

            <div className="post__content">


                <div className="post__text">
                    <h2>Итак, котики!</h2>
                    <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum
                        является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий
                        безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem
                        Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных
                        изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое
                        время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в
                        более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах
                        которых используется Lorem Ipsum.</p>
                    <h3>Итак, котики!</h3>

                    <p>
                        <img src={postPrev} />
                    </p>
                    <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum
                        является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий
                        безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem
                        Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных
                        изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое
                        время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в
                        более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах
                        которых используется Lorem Ipsum.</p>

                    <ul>
                        <li>sfdfsdfsdf</li>
                        <li>sfdfsdfsdf</li>
                        <li>sfdfsdfsdf</li>
                    </ul>

                    <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum
                        является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий
                        безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem
                        Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных
                        изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое
                        время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в
                        более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах
                        которых используется Lorem Ipsum.</p>


                </div>


                <div className="comments">
                    <h3 className="comments__title">Комментарии</h3>

                    <form action="/" method="post">
                        <div className="form__group">
                            <textarea className="form__control  form__control--textarea" name="comment-text"
                                placeholder="Текст комментария" data-autoresize></textarea>
                            <span className="form__line"></span>
                        </div>
                        <button className="btn  btn--blue  btn--rounded  btn--sm" type="submit">Отправить</button>
                    </form>
                </div>


                <ul className="comments__block">
                    <li className="comments__item">
                        <div className="comments__header">
                            <img className="comments__avatar" src={ElAvatar} href="#" alt="" />
                            <div className="comments__author">
                                <div className="comments__name"><a className="comments__name" href="#">EternalEl</a>
                                </div>
                                <time className="comments__pudate" datetime="2020-12-21 12:46">Вчера</time>
                            </div>
                        </div>
                        <div className="comments__text">
                            Крутые котики!!!
                        </div>
                        <button className="comments__replay" type="button">ответить</button>

                        <ul className="comments__block">
                            <li className="comments__item">
                                <div className="comments__header">
                                    <img className="comments__avatar" href="#" src={avatar}
                                        alt="" />
                                    <div className="comments__author">
                                        <div className="comments__name"><a className="comments__name"
                                            href="#">Szpáku</a>
                                        </div>
                                        <time className="comments__pudate" datetime="2020-12-21 12:46">Вчера</time>
                                    </div>
                                </div>
                                <div className="comments__text">
                                    Ну а как же иначе!
                                </div>
                                <button className="comments__replay" type="button">ответить</button>
                            </li>
                        </ul>
                    </li>


                    <li className="comments__item">
                        <div className="comments__header">
                            <img className="comments__avatar" src={Elza} href="#" alt="" />
                            <div className="comments__author">
                                <div className="comments__name"><a className="comments__name" href="#">Elza</a></div>
                                <time className="comments__pudate" datetime="2020-12-21 12:46">Позавчера</time>
                            </div>
                        </div>
                        <div className="comments__text">
                            Зачёт!
                        </div>
                        <button className="comments__replay" type="button">ответить</button>
                    </li>
                </ul>
            </div>


        </article>
    )
}