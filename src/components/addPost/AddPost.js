import React from "react";

import send1 from './img/send1.svg';



export default function AddPost() {
    return (
        <div className="add-post">
            <form className="add-post__form" action="/" method="post">
                <textarea className="add-post__textarea" name="post-text" placeholder="Запостить котика"
                    data-autoresize></textarea>

                <div className="add-post__form-actions">
                    <label className="add-post__file" for="add-post-file">
                        <input type="file" id="add-post-file" />
                    </label>

                    <button className="add-post__send" type="submit">
                        <img src={send1} alt="Мяу" />
                    </button>
                </div>
            </form>
        </div>
    )
}