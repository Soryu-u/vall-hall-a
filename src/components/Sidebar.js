import React from "react";
import avatar from "./img/avatarHeader.gif"
import insta from "./img/insta.png"
import vk from "./img/vk.png"
import twitter from "./img/twitter.png"
import sidebarHeader from "./img/sidebarHeader.jpg"


import "./styles/profile.css"
import "./styles/sidebar.css"
import "./styles/App.css"

export default function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="sidebar__header">
                <img src={sidebarHeader} alt={"sidebarHeader"} />
            </div>

            <div className="sidebar__content">
                <div className="profile">

                    <img className="profile__avatar" src={avatar} alt={"avatar"} />
                    <div className="profile__name">VA11-hall-A</div>
                    <div className="profile__prof">Добро пожаловать. Снова</div>

                    <ul className="social">
                        <li className="social__item">
                            <a className="social__link" href="https://twitter.com/SoryuuChan" target="_blank">
                                <img className="social__twitter" src={twitter} alt={"Twitter"} />
                            </a>
                        </li>
                        <li className="social__item">
                            <a className="social__link" href="https://vk.com/solo7" target="_blank">
                                <img className="social__twitter" src={vk} alt={"ВКонтакте"} />
                            </a>
                        </li>
                        <li className="social__item">
                            <a className="social__link" href="https://www.instagram.com/soryu_u/" target="_blank">
                                <img className="social__twitter" src={insta} alt={"instagram"} />
                            </a>
                        </li>
                    </ul>

                    <div className="profile__text">
                        <p>
                            оставь надежду <br />
                            всяк сюда входящий
                        </p>
                    </div>

                </div>
            </div>

            <div className="sidebar__footer">
                <a className="btn   btn--red" href="#">Присоединиться</a>
                <button className="btn   btn--blue" type="button" data-modal="contact-modal">Написать</button>
            </div>

        </aside>
    )
}