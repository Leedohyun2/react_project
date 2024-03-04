import React from "react";
import Draggable from "react-draggable";
import "../src/squardMaker.css";

const DraggableComponent4 = ({ src,ply_position, name, defaultPosition, number }) => {
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
        {ply_position}  {name} {number}
        </p>
      </div>
    </Draggable>
  );
};

const App = () => {
  const players4 = [
    {
      src: "/inter/tueram.png",
      name: "마르코스 튀람",
      ply_position: "FW",
      number: "9",
      defaultPosition: { x: 730, y: 40 }
    },
    {
      src: "/inter/routa.png",
      name: "라우타로",
      ply_position: "FW",
      number: "7",
      defaultPosition: { x: 350, y: -120 }
    },
    {
      src: "/inter/ballela.png",
      name: "바렐라",
      ply_position: "MF",
      number: "8",
      defaultPosition: { x: 380, y: -70 }
    },
    {
      src: "/inter/debrey.png",
      name: "데브레이",
      ply_position: "DF",
      number: "3",
      defaultPosition: { x: 380, y: -50 }
    },
    {
      src: "/inter/dumpri.png",
      name: "둠프리스",
      ply_position: "DF",
      number: "13",
      defaultPosition: { x: 900, y: -300 }
    },
    {
      src: "/inter/pavar.png",
      name: "파바르",
      ply_position: "DF",
      number: "2",
      defaultPosition: { x: 730, y: -360 }
    },
    {
      src: "/inter/audero.png",
      name: "아우데르",
      ply_position: "GK",
      number: "1",
      defaultPosition: { x: 560, y: -380 }
    },
    {
      src: "/inter/dimarko.png",
      name: "디 마르코",
      ply_position: "DF",
      number: "24",
      defaultPosition: { x: 180, y: -750 }
    },
    {
      src: "/inter/sanchez.png",
      name: "알렉시스 산체스",
      ply_position: "MF",
      number: "15",
      defaultPosition: { x: 550, y: -1120 }
    },
    {
      src: "/inter/chalhano.png",
      name: "찰하노글루",
      ply_position: "MF",
      number: "10",
      defaultPosition: { x:720, y: -1170 }
    },
    {
      src: "/inter/bastoni.png",
      name: "바스토니",
      ply_position: "DF",
      number: "4",
      defaultPosition: { x: 560, y: -1200 }
    },
    {
      src: "/inter/miki.png",
      name: "미키타리안",
      ply_position: "MF",
      number: "18",
      defaultPosition: { x: 1500, y: -1700 },
    },
    {
      src: "/inter/prate.png",
      name: "프라테",
      ply_position: "MF",
      number: "18",
      defaultPosition: { x: 1500, y: -1680 },
    },
    {
      src: "/inter/augusto.png",
      name: "아우구스토",
      ply_position: "DF",
      number: "23",
      defaultPosition: { x: 1500, y: -1660 },
    },
    {
      src: "/inter/darmian.png",
      name: "다르미안",
      ply_position: "DF",
      number: "25",
      defaultPosition: { x: 1500, y: -1640 },
    },
  ];

  return (
    <div className="player_list">
      {players4.map((player, index) => (
        <DraggableComponent4
          key={index}
          ply_position={player.ply_position}
          src={player.src}
          name={player.name}
          number={player.number}
          defaultPosition={player.defaultPosition}
        />
      ))}
    </div>
  );
};

export default App;
