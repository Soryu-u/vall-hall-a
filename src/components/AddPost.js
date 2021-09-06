import React from "react";

import send1 from './img/send1.svg';



export default function AddPost() {
    return (
        <div class="add-post">
            <form class="add-post__form" action="/" method="post">
                <textarea class="add-post__textarea" name="post-text" placeholder="Запостить котика"
                    data-autoresize></textarea>

                <div class="add-post__form-actions">
                    <label class="add-post__file" for="add-post-file">
                        <input type="file" id="add-post-file" />
                    </label>

                    <button class="add-post__send" type="submit">
                        <img src={send1} alt="Мяу" />
                    </button>
                </div>
            </form>
        </div>
    )
}