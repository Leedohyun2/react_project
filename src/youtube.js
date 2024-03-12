import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';
import './youtube.css'

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/youtube/v3/search',
          {
            params: {
              part: 'snippet',
              maxResults: 7, // 가져올 동영상의 최대 수
              q: '23/24 챔피언스리그 주요장면', // 검색어
              type: 'video',
              order: 'date', // 최신순으로 정렬
              key: 'AIzaSyAugnYjF8d3OVwC6l_RuCLpjJUBxNVwlrM',
            },
          }
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className='video_container'>
      <h2>주간 하이라이트</h2>
      <div className="video_wrap">
        {videos.map((video) => (
          <div key={video.id.videoId} className="video_list">
                <YouTube videoId={video.id.videoId} />
                <h4>{video.snippet.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
