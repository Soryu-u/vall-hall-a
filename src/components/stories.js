import React from "react";

import cat1 from "./img/stories/cat1.jpg"
import cat2 from "./img/stories/cat2.jpg"
import cat3 from "./img/stories/cat3.jpg"
import cat4 from "./img/stories/cat4.jpg"


export default function Stories() {
    return (
        <div className="stories">
            <div className="stories__item" data-modal="story-modal">
                <img className="stories__preview" src={cat1} alt="#" />
                <div className="stories__title">Я яблочко</div>
                <time className="stories__date" atetime="2020-11-21 17:33">2020.11.21 17:35</time>
            </div>

            <div className="stories__item">
                <img className="stories__preview" src={cat2} alt="#" />
                <div className="stories__title">Киця спить</div>
                <time className="stories__date" atetime="2020-11-21 17:33">2020.11.21 17:34</time>
            </div>

            <div className="stories__item">
                <img className="stories__preview" src={cat3} alt="#" />
                <div className="stories__title">Слыш микроб</div>
                <time className="stories__date" atetime="2020-11-21 17:33">2020.11.21 17:34</time>
            </div>

            <div className="stories__item">
                <img className="stories__preview" src={cat4} alt="#" />
                <div className="stories__title">Мем про душ</div>
                <time className="stories__date" atetime="2020-11-21 17:33">2020.11.21 17:33</time>
            </div>
        </div>
    )
}