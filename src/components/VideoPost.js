import React from "react";

export default function VideoPost() {
    return (
        <article className="post">
            <div className="post__header">
                <a href="#">
                    <div className="embed">
                        <iframe src="https://www.youtube.com/embed/5sNuDu4dE8Y" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen />
                    </div>
                </a>
            </div>

            <div className="post__content">
                <h2 className="post__title">
                    <a href="#">The Weeknd - Blinding Lights - Cat Cover</a>
                </h2>

            </div>

            <div className="post__footer">
                <ul className="post__data">
                    <li className="post__data-item">
                        <time datetime="2020-11-23 12:23">23.11.2020</time>
                    </li>
                    <li className="post__data-item">
                        <a href="#">мемы с котиками</a>
                    </li>
                </ul>

                <a className="post__read" href="#">комментарии</a>
            </div>
        </article>
    )
}