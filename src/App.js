import React from "react";
import "./App.css";
import "./squardMaker.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import DraggableComponent from "./squardMaker";
import DraggableComponent2 from "./squardMaker2";
import PauseOnHover from "./slick.js";

const Home = () => (
  <div className="home_wrap">
    <PauseOnHover />
    <h2 className="CLW">22-23 Champions League Winner</h2>
    <div className="main_img">
      <span className="main_imgs">
        <img src="/images/mancity_winner.jpg" alt="" />
        <img src="/images/city_champion.jpg" alt="" />
      </span>
    </div>
    <div className="banner">
      <img src="/images/banner.gif" alt="" />
    </div>
  </div>
);

const Matches = () => (
  <div>
    <h2>Matches</h2>
  </div>
);

const Groups = () => (
  <div>
    <h2>Groups</h2>
  </div>
);

const SquadMaker = () => (
  <div className="sq_maker">
    <h2>SquadMaker</h2>
    <span className="mancity_logo">
      <img src="/images/mancity.svg" alt="" />
    </span>
    <span className="team_list">
      <h2>- 팀 명단 -</h2>
      <ul>
        <li>
          <Link href="#none">맨체스터 시티</Link>
        </li>
        <li>
          <Link href="#none">레알 마드리드</Link>
        </li>
        <li>
          <Link href="#none">리버풀</Link>
        </li>
        <li>
          <Link href="#none">AC밀란</Link>
        </li>
      </ul>
    </span>
    <div className="squard">
      <DraggableComponent />
      <DraggableComponent2 />
    </div>
  </div>
);

const Footer = () => (
  <div className="footer_container">
    <div className="footer_top">
      <img src="/images/champ_logo.png" alt="" />
      <span>
        <ul>
          <li>
            <Link href="#">Matches</Link>
          </li>
          <li>
            <Link href="#">Draws</Link>
          </li>
          <li>
            <Link href="#">Groups</Link>
          </li>
          <li>
            <Link href="#">Video</Link>
          </li>
          <li>
            <Link href="#">Gaming</Link>
          </li>
        </ul>
      </span>
      <span>
        <ul>
          <li>
            <Link href="#">Stats</Link>
          </li>
          <li>
            <Link href="#">Teams</Link>
          </li>
          <li>
            <Link href="#">News</Link>
          </li>
          <li>
            <Link href="#">History</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Store</Link>
          </li>
        </ul>
      </span>
      <span className="footer_line">
        <h3>ALSO VISIT</h3>
        <ul>
          <li>
            <Link href="#">UEFA.com</Link>
          </li>
          <li>
            <Link href="#">Inside UEFA</Link>
          </li>
          <li>
            <Link href="#">UEFA Foundation</Link>
          </li>
        </ul>
      </span>
      <span className="footer_line">
        <h3>LANGUAGE</h3>
        <ul>
          <li>
            <Link href="#">English</Link>
          </li>
          <li>
            <Link href="#">Français</Link>
          </li>
          <li>
            <Link href="#">Deutsch</Link>
          </li>
          <li>
            <Link href="#">Русский</Link>
          </li>
          <li>
            <Link href="#">Español</Link>
          </li>
        </ul>
      </span>
    </div>
    <div className="footer_bottom">
      <p>
        © 1998-2024 UEFA. All rights reserved. The UEFA word, the UEFA logo and
        all marks related to UEFA competitions, are protected by trademarks
        and/or copyright of UEFA. No use for commercial purposes may be made of
        such trademarks. Use of UEFA.com signifies your agreement to the Terms
        and Conditions and Privacy Policy.
      </p>
    </div>
  </div>
);

const App = () => (
  <Router>
    <div className="all_wrap">
      {/* 헤더 */}
      <header>
        <div className="header_wrap">
          <span className="main_logo">
            <Link to="/">
              <img src="/images/champ_logo.png" alt="" />
            </Link>
            <span className="loginArea">
              <Link to="/">
                <span>Login</span>
                <FontAwesomeIcon icon={faUser} style={{ color: "#fff" }} />
              </Link>
            </span>
          </span>
          <div className="nav_wrap">
            <nav className="header_nav">
              <ul>
                <li>
                  <Link to="/Matches">Matches</Link>
                </li>
                <li>
                  <Link to="/Groups">Groups</Link>
                </li>
                <li>
                  <Link to="/SquadMaker">Squad Maker</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Route 설정 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Matches" element={<Matches />} />
        <Route path="/Groups" element={<Groups />} />
        <Route path="/SquadMaker" element={<SquadMaker />} />
      </Routes>
    </div>

    {/* Footer */}
    <Footer />
  </Router>
);

export default App;
