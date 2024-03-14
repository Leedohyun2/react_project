import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';
import './youtube.css';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.create({
          baseURL: 'https://www.googleapis.com/youtube/v3',
          params: {
            part: 'snippet',
            maxResults: 7,
            q: '23/24 챔피언스리그 주요장면',
            type: 'video',
            order: 'date',
            key: 'AIzaSyAugnYjF8d3OVwC6l_RuCLpjJUBxNVwlrM',
          },
        }).get('/search');
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
