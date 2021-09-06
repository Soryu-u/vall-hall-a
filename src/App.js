import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Stories from './components/stories';
import AddPost from './components/AddPost';
import CommonPost from './components/CommonPost';
import PhotoPost from './components/PhotoPost';
import VideoPost from './components/VideoPost';
import PhotoPost2 from './components/PhotoPost2';
import Pagination from './components/Pagination';


import './components/styles/App.css';
import './components/styles/button.css';
import './components/styles/stories.css';
import './components/styles/AddPost.css';
import './components/styles/AddPost.css';
import './components/styles/post.css';
import './components/styles/video.css';
import './components/styles/pagination.css';


function App() {
  return (
    <div class="page">

      <Header />

      <div class="main">

        <div class="container">

          <Sidebar />
          <Stories />
          <AddPost />
          <CommonPost />
          <PhotoPost />
          <VideoPost />
          <PhotoPost2 />
          <Pagination />

        </div>

      </div>

    </div>

  );
}

export default App;
