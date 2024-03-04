import React from "react";
import Draggable from "react-draggable";
import "../src/squardMaker.css";

const DraggableComponent3 = ({
  src,
  ply_position,
  name,
  defaultPosition,
  number,
}) => {
  const handleDragStart = (e, ui) => {
    console.log("Drag started:", ui.position);
  };

  const handleDrag = (e, ui) => {
    console.log("Dragging:", ui.position);
  };

  const handleDragStop = (e, ui) => {
    console.log("Drag stopped:", ui.position);
  };

  return (
    <Draggable
      onStart={handleDragStart}
      onDrag={handleDrag}
      onStop={handleDragStop}
      defaultPosition={defaultPosition}
    >
      <div className="draggable-item">
        <img src={src} alt="" />
        <p className="player_infor">
          {ply_position} {name} {number}
        </p>
      </div>
    </Draggable>
  );
};

const App = () => {
  const players3 = [
    {
      src: "/at_madrid/morata.png",
      name: "모라타",
      ply_position: "FW",
      number: "9",
      defaultPosition: { x: 650, y: 40 },
    },
    {
      src: "/at_madrid/griz.png",
      name: "그리즈만",
      ply_position: "FW",
      number: "7",
      defaultPosition: { x: 420, y: -120 },
    },
    {
      src: "/at_madrid/coke.png",
      name: "코케",
      ply_position: "MF",
      number: "8",
      defaultPosition: { x: 430, y: -70 },
    },
    {
      src: "/at_madrid/himenes.png",
      name: "히메네스",
      ply_position: "DF",
      number: "3",
      defaultPosition: { x: 380, y: -50 },
    },
    {
      src: "/at_madrid/yoren.png",
      name: "요렌테",
      ply_position: "MF",
      number: "13",
      defaultPosition: { x: 880, y: -420 },
    },
    {
      src: "/at_madrid/molina.png",
      name: "몰리나",
      ply_position: "DF",
      number: "2",
      defaultPosition: { x: 950, y: -400 },
    },
    {
      src: "/at_madrid/oblack.png",
      name: "얀 오블락",
      ply_position: "GK",
      number: "1",
      defaultPosition: { x: 560, y: -380 },
    },
    {
      src: "/at_madrid/tanko.png",
      name: "아스필리쿠에타",
      ply_position: "DF",
      number: "24",
      defaultPosition: { x: 140, y: -700 },
    },
    {
      src: "/at_madrid/linu.png",
      name: "사무엘 리누",
      ply_position: "MF",
      number: "11",
      defaultPosition: { x: 200, y: -1050 },
    },
    {
      src: "/at_madrid/bichel.png",
      name: "악셀 비첼",
      ply_position: "MF",
      number: "6",
      defaultPosition: { x: 650, y: -1170 },
    },
    {
      src: "/at_madrid/hermoso.png",
      name: "에르모소",
      ply_position: "DF",
      number: "4",
      defaultPosition: { x: 720, y: -1150 },
    },
    {
      src: "/at_madrid/korea.png",
      name: "앙헬 코레아",
      ply_position: "FW",
      number: "18",
      defaultPosition: { x: 1500, y: -1700 },
    },
    {
      src: "/at_madrid/sour.png",
      name: "사울",
      ply_position: "MF",
      number: "18",
      defaultPosition: { x: 1500, y: -1680 },
    },
    {
      src: "/at_madrid/defor.png",
      name: "데폴",
      ply_position: "MF",
      number: "23",
      defaultPosition: { x: 1500, y: -1660 },
    },
    {
      src: "/at_madrid/savichi.png",
      name: "사비치",
      ply_position: "DF",
      number: "25",
      defaultPosition: { x: 1500, y: -1640 },
    },
  ];

  return (
    <div className="player_list">
      {players3.map((player, index) => (
        <DraggableComponent3
          key={index}
          src={player.src}
          ply_position={player.ply_position}
          name={player.name}
          number={player.number}
          defaultPosition={player.defaultPosition}
        />
      ))}
    </div>
  );
};

export default App;
