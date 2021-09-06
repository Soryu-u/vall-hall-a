import React from "react";
import avatar from "./img/avatar.jpg"
import insta from "./img/insta.png"
import vk from "./img/vk.png"
import twitter from "./img/twitter.png"
import sidebarHeader from "./img/sidebarHeader.jpg"


import "./styles/profile.css"
import "./styles/sidebar.css"
import "./styles/App.css"

export default function Sidebar() {
    return (
        <aside class="sidebar">

            <div class="sidebar__header">
                <img src={sidebarHeader} alt={"sidebarHeader"} />
            </div>

            <div class="sidebar__content">
                <div class="profile">

                    <img class="profile__avatar" src={avatar} alt={"avatar"} />
                    <div class="profile__name">Szpáku</div>
                    <div class="profile__prof">Лисичка-токсичка</div>

                    <ul class="social">
                        <li class="social__item">
                            <a class="social__link" href="https://twitter.com/SoryuuChan" target="_blank">
                                <img class="social__twitter" src={twitter} alt={"Twitter"} />
                            </a>
                        </li>
                        <li class="social__item">
                            <a class="social__link" href="https://vk.com/solo7" target="_blank">
                                <img class="social__twitter" src={vk} alt={"ВКонтакте"} />
                            </a>
                        </li>
                        <li class="social__item">
                            <a class="social__link" href="https://www.instagram.com/soryu_u/" target="_blank">
                                <img class="social__twitter" src={insta} alt={"instagram"} />
                            </a>
                        </li>
                    </ul>

                    <div class="profile__text">
                        <p>
                            wake the fuck up, dude <br />
                            we have a twitter to burn
                        </p>
                    </div>

                </div>
            </div>

            <div class="sidebar__footer">
                <a class="btn   btn--red" href="#">Погладить :3</a>
                <button class="btn   btn--blue" type="button" data-modal="contact-modal">Написать</button>
            </div>

        </aside>
    )
}