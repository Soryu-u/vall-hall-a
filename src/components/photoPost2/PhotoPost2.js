import React from "react";
import { Link } from "react-router-dom";

import postPrev from "./img/photo-4.jpg"


export default function PhotoPost2() {
    return (
        <article className="post">
            <div className="post__header  post__header--preview">
                <a href="post.html">
                    <img className="post__preview" src={postPrev} alt="Как делают котики?" />
                </a>
            </div>

            <div className="post__content">
                <h2 className="post__title">
                    <a href="post.html">Как делают котики?</a>
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

                <Link className="post__read" to={{ pathname: './Post.js' }}>oткрыть пост</Link>
            </div>
        </article>
    )
}