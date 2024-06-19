import React, { useState } from "react";
import "./ranking.css";

function LeagueRanking() {
  const teams = [
    {
      name: "레알 마드리드",
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_48x48.png",
      games: 38,
      wins: 29,
      draws: 8,
      losses: 1,
      points: 95,
    },
    {
      name: "지로나",
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/sHiSmLm_rA0BOC5MfrNt8A_48x48.png",
      games: 38,
      wins: 25,
      draws: 6,
      losses: 7,
      points: 81,
    },
    {
      name: "바르셀로나",
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/paYnEE8hcrP96neHRNofhQ_48x48.png",
      games: 38,
      wins: 26,
      draws: 7,
      losses: 5,
      points: 85,
    },
    {
      name: "AT 마드리드",
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/srAAE0bOnCppUrlbJpFiHQ_48x48.png",
      games: 38,
      wins: 24,
      draws: 4,
      losses: 10,
      points: 76,
    },
    {
      name: "빌바오",
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/OSL_5Zm6kYPP1J17Bo5uDA_48x48.png",
      games: 38,
      wins: 19,
      draws: 11,
      losses: 8,
      points: 68,
    },
    {
      name: "레알 소시에다드",
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/w8tb1aeBfVZIj9tZXf7eZg_48x48.png",
      games: 38,
      wins: 16,
      draws: 12,
      losses: 10,
      points: 60,
    },
    {
      name: "레알 베티스",
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/S0fDZjYYytbZaUt0f3cIhg_48x48.png",
      games: 38,
      wins: 14,
      draws: 15,
      losses: 9,
      points: 57,
    },
    {
      name: "발렌시아",
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/QPbjvDwI_0Wuu4tCS2O6uw_48x48.png",
      games: 38,
      wins: 13,
      draws: 10,
      losses: 15,
      points: 49,
    },
    {
      name: "라스팔마스",
      logo: "https://img1.daumcdn.net/thumb/C100x100/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmedia%2Fimg-section%2Fsports13%2Flogo%2Fteam%2F14%2F6577_300300.png&scode=sports",
      games: 38,
      wins: 10,
      draws: 10,
      losses: 18,
      points: 40,
    },
    {
      name: "오사수나",
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/pk-hNCNpGM_JDoHHvLVF-Q_48x48.png",
      games: 38,
      wins: 12,
      draws: 9,
      losses: 17,
      points: 45,
    },
    {
      name: "비야레알",
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/WKH7Ak5cYD6Qm1EEqXzmVw_48x48.png",
      games: 27,
      wins: 14,
      draws: 11,
      losses: 13,
      points: 53,
    },
    {
      name: "헤타페",
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/1UDHZMdKZD15W5gus7dJyg_48x48.png",
      games: 38,
      wins: 10,
      draws: 13,
      losses: 15,
      points: 35,
    },
    {
      name: "알라베스",
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/meAnutdPID67rfUecKaoFg_48x48.png",
      games: 27,
      wins: 12,
      draws: 10,
      losses: 16,
      points: 32,
    },
    {
      name: "세비야",
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/hCTs5EX3WjCMC5Jl3QE4Rw_48x48.png",
      games: 38,
      wins: 10,
      draws: 11,
      losses: 17,
      points: 29,
    },
    {
      name: "마요르카",
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/Ss21P4CUmigjrEtcoapjVg_48x48.png",
      games: 38,
      wins: 8,
      draws: 16,
      losses: 14,
      points: 26,
    },
    {
      name: "라요 바예카노",
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/i5LifmxEVIl0sbvIysiyhw_48x48.png",
      games: 38,
      wins: 8,
      draws: 14,
      losses: 16,
      points: 25,
    },
    {
      name: "셀타 비고",
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/wpdhixHP_sloegfP0UlwAw_48x48.png",
      games: 38,
      wins: 10,
      draws: 11,
      losses: 17,
      points: 24,
    },
    {
      name: "카디스",
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/H1vdTrUUqJBeUW1HfbW0nQ_48x48.png",
      games: 27,
      wins: 6,
      draws: 15,
      losses: 17,
      points: 21,
    },
    {
      name: "그라나다",
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/Fn_X2IO4-1ACuTemcHkDEw_48x48.png",
      games: 38,
      wins: 4,
      draws: 9,
      losses: 25,
      points: 14,
    },
    {
      name: "알메리아",
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/kt3Bf9IFcvWB2N3CN-N7Wg_48x48.png",
      games: 38,
      wins: 3,
      draws: 12,
      losses: 23,
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
