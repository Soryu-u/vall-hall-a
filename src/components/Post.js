import React from "react";

import postPrev from "./img/photo-4.jpg"
import share from "./img/share1.svg"
import ElAvatar from "./img/t-avatar.png"
import avatar from "./img/avatar.jpg"
import Elza from "./img/elza.jpg"


export default function Post() {
    return (
        <article class="post">

            <div class="post__actions">
                <a href="index.html">вернуться назад</a>
                <a href="#">
                    поделиться<img class="post__actions-icon" src={share} alt="поделиться" />
                </a>
            </div>




            <div class="post__header  post__header--open">
                <h1 class="post__title  post__title--mb0">
                    Как делают котики?
                </h1>

                <ul class="post__data">
                    <li class="post__data-item">
                        <time datetime="2020-11-23 12:23">23.11.2020</time>
                    </li>
                    <li class="post__data-item">
                        <a href="#">из жизни котиков</a>
                    </li>
                </ul>
            </div>

            <div class="post__content">


                <div class="post__text">
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


                <div class="comments">
                    <h3 class="comments__title">Комментарии</h3>

                    <form action="/" method="post">
                        <div class="form__group">
                            <textarea class="form__control  form__control--textarea" name="comment-text"
                                placeholder="Текст комментария" data-autoresize></textarea>
                            <span class="form__line"></span>
                        </div>
                        <button class="btn  btn--blue  btn--rounded  btn--sm" type="submit">Отправить</button>
                    </form>
                </div>


                <ul class="comments__block">
                    <li class="comments__item">
                        <div class="comments__header">
                            <img class="comments__avatar" src={ElAvatar} href="#" alt="" />
                            <div class="comments__author">
                                <div class="comments__name"><a class="comments__name" href="#">EternalEl</a>
                                </div>
                                <time class="comments__pudate" datetime="2020-12-21 12:46">Вчера</time>
                            </div>
                        </div>
                        <div class="comments__text">
                            Крутые котики!!!
                        </div>
                        <button class="comments__replay" type="button">ответить</button>

                        <ul class="comments__block">
                            <li class="comments__item">
                                <div class="comments__header">
                                    <img class="comments__avatar" href="#" src={avatar}
                                        alt="" />
                                    <div class="comments__author">
                                        <div class="comments__name"><a class="comments__name"
                                            href="#">Szpáku</a>
                                        </div>
                                        <time class="comments__pudate" datetime="2020-12-21 12:46">Вчера</time>
                                    </div>
                                </div>
                                <div class="comments__text">
                                    Ну а как же иначе!
                                </div>
                                <button class="comments__replay" type="button">ответить</button>
                            </li>
                        </ul>
                    </li>


                    <li class="comments__item">
                        <div class="comments__header">
                            <img class="comments__avatar" src={Elza} href="#" alt="" />
                            <div class="comments__author">
                                <div class="comments__name"><a class="comments__name" href="#">Elza</a></div>
                                <time class="comments__pudate" datetime="2020-12-21 12:46">Позавчера</time>
                            </div>
                        </div>
                        <div class="comments__text">
                            Зачёт!
                        </div>
                        <button class="comments__replay" type="button">ответить</button>
                    </li>
                </ul>
            </div>


        </article>
    )
}