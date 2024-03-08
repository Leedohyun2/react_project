import React, { useState, useEffect } from "react";
import axios from "axios";
import "./highlight.css";

function ChampionsAPI() {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      const options = {
        method: "GET",
        url: "https://free-football-soccer-videos.p.rapidapi.com/",
        headers: {
          "X-RapidAPI-Key":
            "908ed76146msh77de5b5ccc10ac1p12b397jsn7b545b1ecf0d",
          "X-RapidAPI-Host": "free-football-soccer-videos.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setVideos(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchVideos();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="highlight_allwrap">
      <h1>주간 경기 모음</h1>
      <div className="highlight_api">
        <ul>
          {videos.map((video, index) => (
            <li key={index}>
              <div className="match_name">
                <h2>경기: {video.title}</h2>
              </div>
              {/* <div>Description: {video.description}</div> */}
              <div className="match_view">
                <p>하이라이트 보기 :</p>{" "}
                <a href={video.url} target="blank">
                  동영상 재생
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ChampionsAPI;
