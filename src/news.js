import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './news.css';

const SportsNews = () => {
    const [newsList, setNewsList] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태 추가
    const pageSize = 15; // 한 페이지에 보여질 뉴스의 수
    const KAKAO_API_KEY = '53369c67277ee43eb47e88be1f6c6dce'; // 카카오 REST API 키
    const query = 'UEFA'; // 기본 검색어

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    'https://dapi.kakao.com/v2/search/web',
                    {
                        headers: {
                            Authorization: `KakaoAK ${KAKAO_API_KEY}`
                        },
                        params: {
                            query: searchTerm || query, // 검색어가 있으면 사용, 없으면 기본 검색어 사용
                            size: pageSize,
                            page: currentPage
                        }
                    }
                );

                const processedNews = response.data.documents.map(news => ({
                    ...news,
                    title: news.title.replace(/<\/?b>/g, '').replace(/&#39;/g, "'")
                }));

                setNewsList(processedNews);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        };
        fetchNews();
    }, [currentPage, searchTerm]); // currentPage와 searchTerm가 변경될 때마다 실행

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <div className="search-bar">
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="검색어를 입력하세요"
            />
        </div>
            <div className='champs_keyword'>

                <ul>
                    {newsList.map((news, index) => (
                        <li className='keyword_list' key={index}>
                            <a href={news.url} target="_blank" rel="noopener noreferrer">
                                {news.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="pagination">
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>
                        이전 페이지
                    </button>
                    <button onClick={handleNextPage}>다음 페이지</button>
                </div>
            </div>
        </div>
    );
};

export default SportsNews;
