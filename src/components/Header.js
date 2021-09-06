import React from "react";

import "./styles/header.css"
import "./styles/nav.css"
import "./styles/search.css"
import "./styles/App.css"

export default function Header() {
    return (
        <div class="header">
            <div class="header__left">
                <div class="nav">
                    <ul class="nav__list">
                        <li class="nav__item">
                            <a class="nav__link" href="index.html">Главная</a>
                        </li>
                        <li class="nav__item">
                            <a class="nav__link" href="cats.html">Картинки с котиками</a>
                        </li>
                        <li class="nav__item">
                            <a class="nav__link has-subnav" href="#">Котики</a>

                            <ul class="subnav">
                                <li>
                                    <a class="subnav__link" href="#">Мемные котики</a>
                                </li>
                                <li>
                                    <a class="subnav__link" href="#">Милые котики</a>
                                </li>
                                <li>
                                    <a class="subnav__link" href="#">Нарисованные котики</a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav__item">
                            <a class="nav__link" href="#">Сердечки</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="header__right">
                <div class="nav">
                    <ul class="nav__list">
                        <li class="nav__item">
                            <a class="nav__link" href="./profile.html">Профиль</a>
                        </li>
                        <li class="nav__item">
                            <a class="nav__link" href="#">Выйти</a>
                        </li>
                    </ul>
                </div>
                <form class="search" action="/" method="post">
                    <input class="search__input" type="text" placeholder="Найти котиков" />
                </form>
            </div>
        </div>
    )
}