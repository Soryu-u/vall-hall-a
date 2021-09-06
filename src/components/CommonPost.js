import React from "react";

export default function CommonPost() {
    return (
        <div class="post">
            <div class="post__content">
                <p class="post__description">
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

            <div class="post__footer">
                <ul class="post__data">
                    <li class="post__data-item">
                        <time datetime="2020-11-23 12:23">23.11.2020</time>
                    </li>
                </ul>
            </div>
        </div>
    )
}