import React from "react";

import postPrev from "./img/post-header.jpg"


export default function PhotoPost() {
    return (
        <article className="post">
            <div className="post__header  post__header--preview">
                <a href="#">
                    <img className="post__preview" src={postPrev}
                        alt="Обнаружены милые котики в реальной жизни!" />
                </a>
            </div>

            <div className="post__content">
                <h2 className="post__title">
                    <a href="#">Обнаружены милые котики в реальной жизни!</a>
                </h2>

                <p className="post__description">
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum
                    является
                    стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный
                    печатник
                    создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки
                    образцов.
                    Lorem
                    Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в
                    электронный
                    дизайн.
                    Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum
                    в 60-х
                    годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в
                    шаблонах
                    которых
                    используется Lorem Ipsum.
                </p>
            </div>

            <div className="post__footer">
                <ul className="post__data">
                    <li className="post__data-item">
                        <time datetime="2020-11-23 12:23">23.11.2020</time>
                    </li>
                    <li className="post__data-item">
                        <a href="#">из жизни котиков</a>
                    </li>
                </ul>

                <a className="post__read" href="#">oткрыть пост</a>
            </div>
        </article>
    )
}