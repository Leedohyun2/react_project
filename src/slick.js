import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function PauseOnHover() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
      <div className="team_container">
          <h2>2023 - 2024 우승</h2>
          <h3>레알 마드리드</h3>
          <span className="team_img">
            <img src="/team_logo/real_logo-removebg-preview.png" alt="" />
          </span>
        </div>
        <div className="team_container">
          <h2>2022 - 2023 우승</h2>
          <h3>맨체스터 시티</h3>
          <span className="team_img">
            <img src="/team_logo/mancity_logo-removebg-preview.png" alt="" />
          </span>
        </div>
        <div className="team_container">
          <h2>2021 - 2022 우승</h2>
          <h3>레알 마드리드</h3>
          <span className="team_img">
            <img src="/team_logo/real_logo-removebg-preview.png" alt="" />
          </span>
        </div>
        <div className="team_container">
          <h2>2020 - 2021 우승</h2>
          <h3>첼시</h3>
          <span className="team_img">
            <img src="/team_logo/chelse_logo-removebg-preview.png" alt="" />
          </span>
        </div>
        <div className="team_container">
          <h2>2019 - 2020 우승</h2>
          <h3>바이에른 뮌헨</h3>
          <span className="team_img">
            <img src="/team_logo/munhen_logo-removebg-preview.png" alt="" />
          </span>
        </div>
        <div className="team_container">
          <h2>2018 - 2019 우승</h2>
          <h3>리버풀</h3>
          <span className="team_img">
            <img src="/team_logo/liver_logo-removebg-preview.png" alt="" />
          </span>
        </div>
        <div className="team_container">
          <h2>2017 - 2018 우승</h2>
          <h3>레알 마드리드</h3>
          <span className="team_img">
            <img src="/team_logo/real_logo-removebg-preview.png" alt="" />
          </span>
        </div>
        <div className="team_container">
          <h2>2016 - 2017 우승</h2>
          <h3>레알 마드리드</h3>
          <span className="team_img">
            <img src="/team_logo/real_logo-removebg-preview.png" alt="" />
          </span>
        </div>
        <div className="team_container">
          <h2>2015 - 2016 우승</h2>
          <h3>레알 마드리드</h3>
          <span className="team_img">
            <img src="/team_logo/real_logo-removebg-preview.png" alt="" />
          </span>
        </div>
        <div className="team_container">
          <h2>2014 - 2015 우승</h2>
          <h3>바르셀로나</h3>
          <span className="team_img">
            <img src="/team_logo/bacel_logo-removebg-preview.png" alt="" />
          </span>
        </div>
        <div className="team_container">
          <h2>2013 - 2014 우승</h2>
          <h3>레알 마드리드</h3>
          <span className="team_img">
            <img src="/team_logo/real_logo-removebg-preview.png" alt="" />
          </span>
        </div>
        <div className="team_container">
          <h2>2012 - 2013 우승</h2>
          <h3>바이에른 뮌헨</h3>
          <span className="team_img">
            <img src="/team_logo/munhen_logo-removebg-preview.png" alt="" />
          </span>
        </div>
        <div className="team_container">
          <h2>2011 - 2012 우승</h2>
          <h3>첼시</h3>
          <span className="team_img">
            <img src="/team_logo/chelse_logo-removebg-preview.png" alt="" />
          </span>
        </div>
        <div className="team_container">
          <h2>2010 - 2011 우승</h2>
          <h3>바르셀로나</h3>
          <span className="team_img">
            <img src="/team_logo/bacel_logo-removebg-preview.png" alt="" />
          </span>
        </div>
        <div className="team_container">
          <h2>2009 - 2010 우승</h2>
          <h3>인터 밀란</h3>
          <span className="team_img">
            <img src="/team_logo/inter_logo-removebg-preview.png" alt="" />
          </span>
        </div>
      </Slider>
    </div>
  );
}

export default PauseOnHover;
