import React from "react";


import Stories from './stories';
import AddPost from './addPost/AddPost';
import CommonPost from './commonPost/CommonPost';
import PhotoPost from './photoPost/PhotoPost';
import VideoPost from './videoPost/VideoPost';
import PhotoPost2 from './photoPost2/PhotoPost2';
import Pagination from './pagination/Pagination';
import RightBar from './RightBar';



export default function Home() {
    return (
        <div>
            <RightBar />
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




