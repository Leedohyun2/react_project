import React, { useState, useEffect } from "react";
import axios from "axios";

function SportsNews() {
  const [sportsNews, setSportsNews] = useState([]);

  useEffect(() => {
    const fetchSportsNews = async () => {
      try {
        const response = await axios.get(
          "https://openapi.naver.com/v1/search/news.json",
          {
            headers: {
              "X-Naver-Client-Id": "AyZVLwVcU_449byevqFG",
              "X-Naver-Client-Secret": "xk_ogj1gby",
            },
            params: {
              query: "스포츠", // 스포츠 관련 뉴스 검색 쿼리
              display: 15, // 표시할 뉴스 수
            },
          }
        );
        setSportsNews(response.data.items);
      } catch (error) {
        console.error("Error fetching sports news:", error);
      }
    };

    fetchSportsNews();
  }, []);

  return (
    <div>
      <h1>스포츠 뉴스</h1>
      <ul>
        {sportsNews.map((news, index) => (
          <li key={index}>
            <a href={news.link} target="_blank" rel="noopener noreferrer">
              {news.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SportsNews;
