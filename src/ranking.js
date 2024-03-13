import React, { useState } from "react";
import "./ranking.css";

function LeagueRanking() {
  const teams = [
    {
      name: "아스날",
      logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F42_300300.png&scode=sports",
      games: 28,
      wins: 20,
      draws: 4,
      losses: 4,
      points: 64
    },
    {
      name: "리버풀",
      logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F44_300300.png&scode=sports",
      games: 28,
      wins: 19,
      draws: 7,
      losses: 2,
      points: 64
    },
    {
        name: "맨시티",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F17_300300.png&scode=sports",
        games: 28,
        wins: 19,
        draws: 6,
        losses: 3,
        points: 63
      },
      {
        name: "애스턴 빌라",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F40_300300.png&scode=sports",
        games: 28,
        wins: 17,
        draws: 4,
        losses: 7,
        points: 55
      },
      {
        name: "토트넘",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F33_300300.png&scode=sports",
        games: 27,
        wins: 16,
        draws: 5,
        losses: 6,
        points: 53
      },
      {
        name: "맨유",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F35_300300.png&scode=sports",
        games: 28,
        wins: 15,
        draws: 2,
        losses: 11,
        points: 47
      },
      {
        name: "웨스트햄",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F37_300300.png&scode=sports",
        games: 28,
        wins: 12,
        draws: 7,
        losses: 9,
        points: 43
      },
      {
        name: "브라이튼",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F30_300300.png&scode=sports",
        games: 28,
        wins: 11,
        draws: 9,
        losses: 8,
        points: 42
      },
      {
        name: "울버햄튼",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F3_300300.png&scode=sports",
        games: 28,
        wins: 12,
        draws: 5,
        losses: 11,
        points: 41
      },
      {
        name: "뉴캐슬",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F39_300300.png&scode=sports",
        games: 28,
        wins: 12,
        draws: 4,
        losses: 12,
        points: 40
      },
      {
        name: "첼시",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F38_300300.png&scode=sports",
        games: 27,
        wins: 11,
        draws: 6,
        losses: 10,
        points: 39
      },
      {
        name: "풀럼",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F43_300300.png&scode=sports",
        games: 28,
        wins: 10,
        draws: 5,
        losses: 13,
        points: 35
      },
      {
        name: "본머스",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F60_300300.png&scode=sports",
        games: 27,
        wins: 8,
        draws: 8,
        losses: 11,
        points: 32
      },
      {
        name: "크리스탈 팰리스",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F7_300300.png&scode=sports",
        games: 28,
        wins: 7,
        draws: 8,
        losses: 13,
        points: 29
      },
      {
        name: "브렌트포드",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F50_300300.png&scode=sports",
        games: 28,
        wins: 7,
        draws: 5,
        losses: 16,
        points: 26
      },
      {
        name: "에버턴",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F48_300300.png&scode=sports",
        games: 28,
        wins: 8,
        draws: 7,
        losses: 13,
        points: 25
      },
      {
        name: "노팅엄",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F14_300300.png&scode=sports",
        games: 28,
        wins: 6,
        draws: 6,
        losses: 16,
        points: 24
      },
      {
        name: "루턴 타운",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F72_300300.png&scode=sports",
        games: 27,
        wins: 5,
        draws: 6,
        losses: 16,
        points: 21
      },
      {
        name: "번리",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F6_300300.png&scode=sports",
        games: 28,
        wins: 3,
        draws: 5,
        losses: 20,
        points: 14
      },
      {
        name: "셰필드",
        logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F15_300300.png&scode=sports",
        games: 28,
        wins: 3,
        draws: 5,
        losses: 20,
        points: 14
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
        <h2>2023-24 프리미어리그 종합 순위</h2>
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
