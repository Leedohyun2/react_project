import React, { useState } from "react";
import "./ranking.css";

function LeagueRanking() {
  const teams = [
    {
      name: "레알 마드리드",
      logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2829_300300.png&scode=sports",
      games: 28,
      wins: 21,
      draws: 6,
      losses: 1,
      points: 69,
    },
    {
      name: "지로나",
      logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F24264_300300.png&scode=sports",
      games: 28,
      wins: 19,
      draws: 5,
      losses: 4,
      points: 62,
    },
    {
      name: "바르셀로나",
      logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2817_300300.png&scode=sports",
      games: 28,
      wins: 18,
      draws: 7,
      losses: 3,
      points: 61,
    },
    {
      name: "AT 마드리드",
      logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2836_300300.png&scode=sports",
      games: 28,
      wins: 17,
      draws: 4,
      losses: 7,
      points: 55,
    },
    {
      name: "빌바오",
      logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2825_300300.png&scode=sports",
      games: 28,
      wins: 15,
      draws: 8,
      losses: 5,
      points: 53,
    },
    {
      name: "레알 소시에다드",
      logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2824_300300.png&scode=sports",
      games: 28,
      wins: 11,
      draws: 10,
      losses: 7,
      points: 43,
    },
    {
      name: "레알 베티스",
      logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2816_300300.png&scode=sports",
      games: 28,
      wins: 10,
      draws: 12,
      losses: 6,
      points: 42,
    },
    {
      name: "발렌시아",
      logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2828_300300.png&scode=sports",
      games: 28,
      wins: 11,
      draws: 9,
      losses: 8,
      points: 42,
    },
    {
      name: "라스팔마스",
      logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F6577_300300.png&scode=sports",
      games: 28,
      wins: 12,
      draws: 5,
      losses: 11,
      points: 41,
    },
    {
      name: "오사수나",
      logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2820_300300.png&scode=sports",
      games: 28,
      wins: 12,
      draws: 4,
      losses: 12,
      points: 40,
    },
    {
      name: "비야레알",
      logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2819_300300.png&scode=sports",
      games: 27,
      wins: 11,
      draws: 6,
      losses: 10,
      points: 39,
    },
    {
      name: "헤타페",
      logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2859_300300.png&scode=sports",
      games: 28,
      wins: 10,
      draws: 5,
      losses: 13,
      points: 35,
    },
    {
      name: "알라베스",
      logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2885_300300.png&scode=sports",
      games: 27,
      wins: 8,
      draws: 8,
      losses: 11,
      points: 32,
    },
    {
      name: "세비야",
      logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2833_300300.png&scode=sports",
      games: 28,
      wins: 7,
      draws: 8,
      losses: 13,
      points: 29,
    },
    {
      name: "마요르카",
      logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2826_300300.png&scode=sports",
      games: 28,
      wins: 7,
      draws: 5,
      losses: 16,
      points: 26,
    },
    {
      name: "라요 바예카노",
      logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2818_300300.png&scode=sports",
      games: 28,
      wins: 8,
      draws: 7,
      losses: 13,
      points: 25,
    },
    {
      name: "셀타 비고",
      logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2821_300300.png&scode=sports",
      games: 28,
      wins: 6,
      draws: 6,
      losses: 16,
      points: 24,
    },
    {
      name: "카디스",
      logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F4488_300300.png&scode=sports",
      games: 27,
      wins: 5,
      draws: 6,
      losses: 16,
      points: 21,
    },
    {
      name: "그라나다",
      logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F33779_300300.png&scode=sports",
      games: 28,
      wins: 3,
      draws: 5,
      losses: 20,
      points: 14,
    },
    {
      name: "알메리아",
      logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2858_300300.png&scode=sports",
      games: 28,
      wins: 3,
      draws: 5,
      losses: 20,
      points: 14,
    },
  ];

  // 각 팀의 포인트 계산
  teams.forEach(team => {
    team.points = team.wins * 3 + team.draws;
  });

  const [visibleRank, setVisibleRank] = useState(10);

  const handleShowMore = () => {
    if (visibleRank === 10) {
      setVisibleRank(20);
    } else {
      setVisibleRank(10);
    }
  };

  teams.sort((a, b) => b.points - a.points);

  return (
    <div className="ranking_wrap">
      <div>
        <h2>2023-24 라리가 종합 순위</h2>
        <span className="rank_top">
          <ul>
            <li>순위</li>
            <li>팀</li>
          </ul>
          <ul>
            <li>경기</li>
            <li>승</li>
            <li>무</li>
            <li>패</li>
            <li>승점</li>
          </ul>
        </span>
        {/* 순위가 10까지만 보이도록 설정 */}
        {teams.slice(0, visibleRank).map((team, index) => (
          <span className="team_rank" key={index}>
            <ul>
              <li>{index + 1}</li>
              <li className="rank_team">
                <img src={team.logo} alt="" />
                <p>{team.name}</p>
              </li>
            </ul>
            <ul>
              <li>{team.games}</li>
              <li>{team.wins}</li>
              <li>{team.draws}</li>
              <li>{team.losses}</li>
              <li>{team.points}</li>
            </ul>
          </span>
        ))}
        {/* 더보기 버튼 */}
        <button className="more_btn" onClick={handleShowMore}>
          {visibleRank === 10 ? "더 보기" : "접기"}
        </button>
      </div>
    </div>
  );
}

export default LeagueRanking;
