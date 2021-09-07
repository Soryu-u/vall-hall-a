import Sidebar from './components/Sidebar';
import Home from './components/Home'
import Post from './components/Post';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './components/styles/App.css';
import './components/styles/button.css';
import './components/styles/stories.css';
import './components/styles/AddPost.css';
import './components/styles/AddPost.css';
import './components/styles/post.css';
import './components/styles/video.css';
import './components/styles/pagination.css';
import "./components/styles/header.css"
import "./components/styles/nav.css"
import "./components/styles/search.css"
import "./components/styles/comments.css"
import "./components/styles/form.css"




function App() {
  return (
    <div class="page">
      <Router>
        <div class="header">
          <div class="header__left">

            <div class="nav">
              <ul class="nav__list">
                <li class="nav__item">
                  <Link class="nav__link" to="/">Главная</Link>
                </li>
                <li class="nav__item">
                  <Link class="nav__link" to="/pic_cats">Картинки с котиками</Link>
                </li>
                <li class="nav__item">
                  <Link class="nav__link has-subnav" to="/cats">Котики</Link>

                  <ul class="subnav">
                    <li>
                      <Link class="subnav__link" to="/meme_cats">Мемные котики</Link>
                    </li>
                    <li>
                      <Link class="subnav__link" to="/uwu_cats">Милые котики</Link>
                    </li>
                    <li>
                      <Link class="subnav__link" to="/paint_cats">Нарисованные котики</Link>
                    </li>
                  </ul>
                </li>
                <li class="nav__item">
                  <Link class="nav__link" to="/hearts">Сердечки</Link>
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

        <div class="main">

          <div class="container">

            <Sidebar />



            <Switch>
              <Route path="/pic_cats">
                <Pic_cats />
              </Route>
              <Route path="/cats">
                <Cats />
              </Route>
              <Route path="/meme_cats">
                <Meme_cats />
              </Route>
              <Route path="/uwu_cats">
                <Uwu_cats />
              </Route>
              <Route path="/paint_cats">
                <Paint_cats />
              </Route>
              <Route path="/hearts">
                <Hearts />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>

            <Post />

          </div>

        </div>
      </Router>


    </div >

  );
}





function Pic_cats() {
  return <h2>Pic_cats</h2>;
}

function Cats() {
  return <h2>Cats</h2>;
}

function Meme_cats() {
  return <h2>Meme_cats</h2>;
}

function Uwu_cats() {
  return <h2>Uwu_cats</h2>;
}

function Paint_cats() {
  return <h2>Paint_cats</h2>;
}

function Hearts() {
  return <h2>Hearts</h2>;
}



export default App;
