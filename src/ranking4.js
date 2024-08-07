import React, { useState } from "react";
import "./ranking.css";

function LeagueRanking() {
  const teams = [
    {
      name: "바이어 레버쿠젠",
      logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2681_300300.png&scode=sports",
      games: 34,
      wins: 28,
      draws: 6,
      losses: 0,
      points: 90
    },
    {
      name: "바이에른 뮌헨",
      logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2672_300300.png&scode=sports",
      games: 34,
      wins: 23,
      draws: 3,
      losses: 8,
      points: 72
    },
    {
        name: "슈투르가르트",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2677_300300.png&scode=sports",
        games: 34,
        wins: 23,
        draws: 4,
        losses: 7,
        points: 73
      },
      {
        name: "도르트문트",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2673_300300.png&scode=sports",
        games: 34,
        wins: 18,
        draws: 9,
        losses: 7,
        points: 63
      },
      {
        name: "라이프치히",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F36360_300300.png&scode=sports",
        games: 34,
        wins: 18,
        draws: 9,
        losses: 7,
        points: 65
      },
      {
        name: "프랑크푸르트",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2674_300300.png&scode=sports",
        games: 34,
        wins: 11,
        draws: 14,
        losses: 9,
        points: 47
      },
      {
        name: "호펜하임",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2569_300300.png&scode=sports",
        games: 34,
        wins: 13,
        draws: 7,
        losses: 14,
        points: 46
      },
      {
        name: "프라이부르크",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2538_300300.png&scode=sports",
        games: 34,
        wins: 11,
        draws: 9,
        losses: 14,
        points: 42
      },
      {
        name: "아우크스부르크",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2600_300300.png&scode=sports",
        games: 34,
        wins: 10,
        draws: 9,
        losses: 15,
        points: 39
      },
      {
        name: "베르더 브레멘",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2534_300300.png&scode=sports",
        games: 34,
        wins: 8,
        draws: 6,
        losses: 11,
        points: 30
      },
      {
        name: "하이덴하임",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F5885_300300.png&scode=sports",
        games: 34,
        wins: 7,
        draws: 7,
        losses: 11,
        points: 28
      },
      {
        name: "묀헨글라트바흐",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2527_300300.png&scode=sports",
        games: 34,
        wins: 7,
        draws: 13,
        losses: 14,
        points: 34
      },
      {
        name: "볼프스부르크",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2524_300300.png&scode=sports",
        games: 34,
        wins: 10,
        draws: 7,
        losses: 17,
        points: 37
      },
      {
        name: "우니온 베를린",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2547_300300.png&scode=sports",
        games: 34,
        wins: 9,
        draws: 6,
        losses: 19,
        points: 33
      },
      {
        name: "Vfl 보훔",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2542_300300.png&scode=sports",
        games: 34,
        wins: 7,
        draws: 12,
        losses: 15,
        points: 33
      },
      {
        name: "쾰른",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2671_300300.png&scode=sports",
        games: 34,
        wins: 5,
        draws: 12,
        losses: 17,
        points: 27
      },
      {
        name: "마인츠",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2556_300300.png&scode=sports",
        games: 34,
        wins: 7,
        draws: 14,
        losses: 13,
        points: 35
      },
      {
        name: "다름슈타트",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F2576_300300.png&scode=sports",
        games: 34,
        wins: 3,
        draws: 8,
        losses: 23,
        points: 17
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
        <h2>2023-24 분데스리가 종합 순위</h2>
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
