import React from "react";
import Draggable from "react-draggable";
import "../src/squardMaker.css";

const DraggableComponent4 = ({ src, name, defaultPosition, number }) => {
  // 드래그가 시작될 때 실행되는 함수
  const handleDragStart = (e, ui) => {
    console.log("Drag started:", ui.position);
  };

  // 드래그 중인 동안 실행되는 함수
  const handleDrag = (e, ui) => {
    console.log("Dragging:", ui.position);
  };

  // 드래그가 종료될 때 실행되는 함수
  const handleDragStop = (e, ui) => {
    console.log("Drag stopped:", ui.position);
  };

  return (
    <Draggable
      onStart={handleDragStart}
      onDrag={handleDrag}
      onStop={handleDragStop}
      defaultPosition={defaultPosition} // 드래그 가능한 요소의 초기 위치를 지정합니다.
    >
      <div className="draggable-item">
        <img src={src} alt="" />
        <p className="player_infor">
          {name} {number}
        </p>
      </div>
    </Draggable>
  );
};

const App = () => {
  return (
    <div className="player_list">
      <DraggableComponent4
        src="/inter/tueram.png"
        name="마르코스 튀람"
        number="9"
        defaultPosition={{ x: 730, y: 40 }}
      />
      <DraggableComponent4
        src="/inter/routa.png"
        name="라우타로"
        number="7"
        defaultPosition={{ x: 350, y: -120 }}
      />
      <DraggableComponent4
        src="/inter/ballela.png"
        name="바렐라"
        number="8"
        defaultPosition={{ x: 380, y: -70 }}
      />
      <DraggableComponent4
        src="/inter/debrey.png"
        name="데브레이"
        number="3"
        defaultPosition={{ x: 380, y: -50 }}
      />
      <DraggableComponent4
        src="/inter/dumpri.png"
        name="둠프리스"
        number="13"
        defaultPosition={{ x: 900, y: -300 }}
      />
      <DraggableComponent4
        src="/inter/pavar.png"
        name="파바르"
        number="2"
        defaultPosition={{ x: 730, y: -360 }}
      />
      <DraggableComponent4
        src="/inter/audero.png"
        name="아우데르"
        number="1"
        defaultPosition={{ x: 560, y: -380 }}
      />
      <DraggableComponent4
        src="/inter/dimarko.png"
        name="디 마르코"
        number="24"
        defaultPosition={{ x: 180, y: -750 }}
      />
      <DraggableComponent4
        src="/inter/sanchez.png"
        name="알렉시스 산체스"
        number="15"
        defaultPosition={{ x: 550, y: -1120 }}
      />
      <DraggableComponent4
        src="/inter/chalhano.png"
        name="찰하노글루"
        number="10"
        defaultPosition={{ x:720, y: -1170 }}
      />
      <DraggableComponent4
        src="/inter/bastoni.png"
        name="바스토니"
        number="4"
        defaultPosition={{ x: 560, y: -1200 }}
      />
    </div>
  );
};

export default App;
