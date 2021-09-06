import React from "react";

export default function Pagination() {
    return (
        <ul class="pagination">
            <li class="pagination__item">
                <a class="pagination__link" href="#">&lt;</a>
            </li>
            <li class="pagination__item">
                <a class="pagination__link" href="#">1</a>
            </li>
            <li class="pagination__item">
                <a class="pagination__link active" href="#">2</a>
            </li>
            <li class="pagination__item">
                <a class="pagination__link" href="#">3</a>
            </li>
            <li class="pagination__item">
                <a class="pagination__link" href="#">&gt;</a>
            </li>
        </ul>
    )
}