import React from "react";


import Stories from './stories';
import AddPost from './AddPost';
import CommonPost from './CommonPost';
import PhotoPost from './PhotoPost';
import VideoPost from './VideoPost';
import PhotoPost2 from './PhotoPost2';
import Pagination from './Pagination';



export default function Home() {
    return (
        <div>
            <Stories />
            <AddPost />
            <CommonPost />
            <PhotoPost />
            <VideoPost />
            <PhotoPost2 />
            <Pagination />
        </div>
    )
}




