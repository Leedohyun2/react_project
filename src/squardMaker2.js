import React from "react";
import Draggable from "react-draggable";
import "../src/squardMaker.css";

const DraggableComponent2 = ({ src, ply_position, name, defaultPosition, number }) => {
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
  const players2 = [
    {
      src: "/real/belling.png",
      name: "주드 벨링엄",
      ply_position: "MF",
      number: "31",
      defaultPosition: { x: 560, y: 60 }
    },
    {
      src: "/real/vini.png",
      name: "비니시우스",
      ply_position: "FW",
      number: "7",
      defaultPosition: { x: 240, y: -120 }
    },
    {
      src: "/real/modri.png",
      name: "루카 모드리치",
      ply_position: "MF",
      number: "10",
      defaultPosition: { x: 340, y: -100 }
    },
    {
      src: "/real/ruedi.png",
      name: "안토니오 뤼디거",
      ply_position: "DF",
      number: "3",
      defaultPosition: { x: 360, y: -50 }
    },
    {
      src: "/real/valve.png",
      name: "발베르데",
      ply_position: "MF",
      number: "8",
      defaultPosition: { x: 780, y: -420 }
    },
    {
      src: "/real/carva.png",
      name: "카르바할",
      ply_position: "DF",
      number: "2",
      defaultPosition: { x: 950, y: -400 }
    },
    {
      src: "/real/courtu.png",
      name: "티보 쿠르투아",
      ply_position: "GK",
      number: "1",
      defaultPosition: { x: 560, y: -380 }
    },
    {
      src: "/real/cama.png",
      name: "카마빙가",
      ply_position: "DF",
      number: "24",
      defaultPosition: { x: 100, y: -700 }
    },
    {
      src: "/real/hordi.png",
      name: "호드리구",
      ply_position: "FW",
      number: "11",
      defaultPosition: { x: 850, y: -1220 }
    },
    {
      src: "/real/chua.png",
      name: "추아메니",
      ply_position: "MF",
      number: "6",
      defaultPosition: { x: 560, y: -1110 }
    },
    {
      src: "/real/mille.png",
      name: "밀리탕",
      ply_position: "DF",
      number: "4",
      defaultPosition: { x: 740, y: -1150 }
    },
    {
      src: "/real/hosellu.png",
      name: "호셀루",
      ply_position: "FW",
      number: "18",
      defaultPosition: { x: 1500, y: -1700 },
    },
    {
      src: "/real/brahim.png",
      name: "브라힘",
      ply_position: "FW",
      number: "7",
      defaultPosition: { x: 1500, y: -1680 },
    },
    {
      src: "/real/cross.png",
      name: "토니 크로스",
      ply_position: "MF",
      number: "15",
      defaultPosition: { x: 1500, y: -1660 },
    },
    {
      src: "/real/alava.png",
      name: "알라바",
      ply_position: "DF",
      number: "31",
      defaultPosition: { x: 1500, y: -1640 },
    },
  ];

  return (
    <div className="player_list">
      {players2.map((player, index) => (
        <DraggableComponent2
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
