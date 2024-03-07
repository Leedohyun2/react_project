import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YoutubeSearch = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            maxResults: 5,
            q: 'champions league',
            type: 'video',
            key: 'AIzaSyAIKV9jzNJjlG7Su_fjuoVEMQ4KEBbTDCQ', // API 키
          },
        });
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []); // 컴포넌트가 처음 마운트될 때만 실행하도록 []를 빈 배열로 전달

  return (
    <div>
      <div>
        {videos.map((video) => (
          <div key={video.id.videoId}>
            <h2>{video.snippet.title}</h2>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default YoutubeSearch;
