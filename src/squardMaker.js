import React from "react";
import Draggable from "react-draggable";
import "../src/squardMaker.css";

const players = [
  {
    src: "/images/hollan.png",
    ply_position: "FW",
    name: "엘링 홀란",
    number: "9",
    defaultPosition: { x: 560, y: 20 },
  },
  {
    src: "/images/podden.png",
    name: "필 포든",
    ply_position: "FW",
    number: "47",
    defaultPosition: { x: 200, y: -100 },
  },
  {
    src: "/images/kdb.png",
    name: "케빈 더브라위너",
    ply_position: "MF",
    number: "17",
    defaultPosition: { x: 340, y: -80 },
  },
  {
    src: "/images/dias.png",
    name: "후뱅 디아스",
    ply_position: "DF",
    number: "3",
    defaultPosition: { x: 360, y: -30 },
  },
  {
    src: "/images/covaci.png",
    name: "코바치치",
    ply_position: "MF",
    number: "8",
    defaultPosition: { x: 780, y: -400 },
  },
  {
    src: "/images/walker.png",
    name: "카일 워커",
    ply_position: "DF",
    number: "2",
    defaultPosition: { x: 950, y: -380 },
  },
  {
    src: "/images/song.png",
    name: "에데르송",
    ply_position: "GK",
    number: "31",
    defaultPosition: { x: 560, y: -380 },
  },
  {
    src: "/images/dior.png",
    name: "그바르디올",
    ply_position: "DF",
    number: "24",
    defaultPosition: { x: 100, y: -680 },
  },
  {
    src: "/images/silva.png",
    ply_position: "FW",
    name: "베르나르두 실바",
    number: "20",
    defaultPosition: { x: 890, y: -1200 },
  },
  {
    src: "/images/rodri.png",
    name: "로드리",
    ply_position: "MF",
    number: "16",
    defaultPosition: { x: 560, y: -1130 },
  },
  {
    src: "/images/stons.png",
    name: "존 스톤스",
    ply_position: "DF",
    number: "4",
    defaultPosition: { x: 740, y: -1130 },
  },
  {
    src: "/mancity/alvares.png",
    name: "알바레스",
    ply_position: "FW",
    number: "10",
    defaultPosition: { x: 1500, y: -1700 },
  },
  {
    src: "/mancity/gril.png",
    name: "잭 그릴리시",
    ply_position: "FW",
    number: "7",
    defaultPosition: { x: 1500, y: -1680 },
  },
  {
    src: "/mancity/nunis.png",
    name: "누니스",
    ply_position: "MF",
    number: "14",
    defaultPosition: { x: 1500, y: -1660 },
  },
  {
    src: "/mancity/ake.png",
    name: "네이선 아케",
    ply_position: "DF",
    number: "18",
    defaultPosition: { x: 1500, y: -1640 },
  },
];

const App = () => {
  return (
    <div className="player_list">
      {players.map((player, index) => (
        <DraggableComponent
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

const DraggableComponent = ({ src, ply_position, name, defaultPosition, number }) => {
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

export default App;
