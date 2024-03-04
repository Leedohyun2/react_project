// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


// const players3 = [
//     {
//       src: "/at_madrid/morata.png",
//       name: "모라타",
//       ply_position: "FW",
//       number: "9",
//       defaultPosition: { x: 650, y: 40 },
//     },
//     {
//       src: "/at_madrid/griz.png",
//       name: "그리즈만",
//       ply_position: "FW",
//       number: "7",
//       defaultPosition: { x: 420, y: -120 },
//     },
//     {
//       src: "/at_madrid/coke.png",
//       name: "코케",
//       ply_position: "MF",
//       number: "8",
//       defaultPosition: { x: 430, y: -70 },
//     },
//     {
//       src: "/at_madrid/himenes.png",
//       name: "히메네스",
//       ply_position: "DF",
//       number: "3",
//       defaultPosition: { x: 380, y: -50 },
//     },
//     {
//       src: "/at_madrid/yoren.png",
//       name: "요렌테",
//       ply_position: "MF",
//       number: "13",
//       defaultPosition: { x: 880, y: -420 },
//     },
//     {
//       src: "/at_madrid/molina.png",
//       name: "몰리나",
//       ply_position: "DF",
//       number: "2",
//       defaultPosition: { x: 950, y: -400 },
//     },
//     {
//       src: "/at_madrid/oblack.png",
//       name: "얀 오블락",
//       ply_position: "GK",
//       number: "1",
//       defaultPosition: { x: 560, y: -380 },
//     },
//     {
//       src: "/at_madrid/tanko.png",
//       name: "아스필리쿠에타",
//       ply_position: "DF",
//       number: "24",
//       defaultPosition: { x: 140, y: -700 },
//     },
//     {
//       src: "/at_madrid/linu.png",
//       name: "사무엘 리누",
//       ply_position: "MF",
//       number: "11",
//       defaultPosition: { x: 200, y: -1050 },
//     },
//     {
//       src: "/at_madrid/bichel.png",
//       name: "악셀 비첼",
//       ply_position: "MF",
//       number: "6",
//       defaultPosition: { x: 650, y: -1170 },
//     },
//     {
//       src: "/at_madrid/hermoso.png",
//       name: "에르모소",
//       ply_position: "DF",
//       number: "4",
//       defaultPosition: { x: 720, y: -1150 },
//     },
//     {
//       src: "/at_madrid/korea.png",
//       name: "앙헬 코레아",
//       ply_position: "FW",
//       number: "18",
//       defaultPosition: { x: 1500, y: -1700 },
//     },
//     {
//       src: "/at_madrid/sour.png",
//       name: "사울",
//       ply_position: "MF",
//       number: "18",
//       defaultPosition: { x: 1500, y: -1680 },
//     },
//     {
//       src: "/at_madrid/defor.png",
//       name: "데폴",
//       ply_position: "MF",
//       number: "23",
//       defaultPosition: { x: 1500, y: -1660 },
//     },
//     {
//       src: "/at_madrid/savichi.png",
//       name: "사비치",
//       ply_position: "DF",
//       number: "25",
//       defaultPosition: { x: 1500, y: -1640 },
//     },
//   ];

// const players4 = [
//     {
//       src: "/inter/tueram.png",
//       name: "마르코스 튀람",
//       ply_position: "FW",
//       number: "9",
//       defaultPosition: { x: 730, y: 40 }
//     },
//     {
//       src: "/inter/routa.png",
//       name: "라우타로",
//       ply_position: "FW",
//       number: "7",
//       defaultPosition: { x: 350, y: -120 }
//     },
//     {
//       src: "/inter/ballela.png",
//       name: "바렐라",
//       ply_position: "MF",
//       number: "8",
//       defaultPosition: { x: 380, y: -70 }
//     },
//     {
//       src: "/inter/debrey.png",
//       name: "데브레이",
//       ply_position: "DF",
//       number: "3",
//       defaultPosition: { x: 380, y: -50 }
//     },
//     {
//       src: "/inter/dumpri.png",
//       name: "둠프리스",
//       ply_position: "DF",
//       number: "13",
//       defaultPosition: { x: 900, y: -300 }
//     },
//     {
//       src: "/inter/pavar.png",
//       name: "파바르",
//       ply_position: "DF",
//       number: "2",
//       defaultPosition: { x: 730, y: -360 }
//     },
//     {
//       src: "/inter/audero.png",
//       name: "아우데르",
//       ply_position: "GK",
//       number: "1",
//       defaultPosition: { x: 560, y: -380 }
//     },
//     {
//       src: "/inter/dimarko.png",
//       name: "디 마르코",
//       ply_position: "DF",
//       number: "24",
//       defaultPosition: { x: 180, y: -750 }
//     },
//     {
//       src: "/inter/sanchez.png",
//       name: "알렉시스 산체스",
//       ply_position: "MF",
//       number: "15",
//       defaultPosition: { x: 550, y: -1120 }
//     },
//     {
//       src: "/inter/chalhano.png",
//       name: "찰하노글루",
//       ply_position: "MF",
//       number: "10",
//       defaultPosition: { x:720, y: -1170 }
//     },
//     {
//       src: "/inter/bastoni.png",
//       name: "바스토니",
//       ply_position: "DF",
//       number: "4",
//       defaultPosition: { x: 560, y: -1200 }
//     },
//     {
//       src: "/inter/miki.png",
//       name: "미키타리안",
//       ply_position: "MF",
//       number: "18",
//       defaultPosition: { x: 1500, y: -1700 },
//     },
//     {
//       src: "/inter/prate.png",
//       name: "프라테",
//       ply_position: "MF",
//       number: "18",
//       defaultPosition: { x: 1500, y: -1680 },
//     },
//     {
//       src: "/inter/augusto.png",
//       name: "아우구스토",
//       ply_position: "DF",
//       number: "23",
//       defaultPosition: { x: 1500, y: -1660 },
//     },
//     {
//       src: "/inter/darmian.png",
//       name: "다르미안",
//       ply_position: "DF",
//       number: "25",
//       defaultPosition: { x: 1500, y: -1640 },
//     },
//   ];