import React from "react";

export default function VideoPost() {
    return (
        <article class="post">
            <div class="post__header">
                <a href="#">
                    <div class="embed">
                        <iframe src="https://www.youtube.com/embed/5sNuDu4dE8Y" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen />
                    </div>
                </a>
            </div>

            <div class="post__content">
                <h2 class="post__title">
                    <a href="#">The Weeknd - Blinding Lights - Cat Cover</a>
                </h2>

            </div>

            <div class="post__footer">
                <ul class="post__data">
                    <li class="post__data-item">
                        <time datetime="2020-11-23 12:23">23.11.2020</time>
                    </li>
                    <li class="post__data-item">
                        <a href="#">мемы с котиками</a>
                    </li>
                </ul>

                <a class="post__read" href="#">комментарии</a>
            </div>
        </article>
    )
}