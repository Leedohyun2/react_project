import React from "react";
import Draggable from "react-draggable";
import "../src/squardMaker.css";

const DraggableComponent2 = ({ src, name, defaultPosition, number }) => {
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
      <DraggableComponent2
        src="/real/belling.png"
        name="주드 벨링엄"
        number="31"
        defaultPosition={{ x: 560, y: 60 }}
      />
      <DraggableComponent2
        src="/real/vini.png"
        name="비니시우스"
        number="7"
        defaultPosition={{ x: 240, y: -120 }}
      />
      <DraggableComponent2
        src="/real/modri.png"
        name="루카 모드리치"
        number="10"
        defaultPosition={{ x: 340, y: -100 }}
      />
      <DraggableComponent2
        src="/real/ruedi.png"
        name="안토니오 뤼디거"
        number="3"
        defaultPosition={{ x: 360, y: -50 }}
      />
      <DraggableComponent2
        src="/real/valve.png"
        name="발베르데"
        number="8"
        defaultPosition={{ x: 780, y: -420 }}
      />
      <DraggableComponent2
        src="/real/carva.png"
        name="카르바할"
        number="2"
        defaultPosition={{ x: 950, y: -400 }}
      />
      <DraggableComponent2
        src="/real/courtu.png"
        name="티보 쿠르투아"
        number="1"
        defaultPosition={{ x: 560, y: -380 }}
      />
      <DraggableComponent2
        src="/real/cama.png"
        name="카마빙가"
        number="24"
        defaultPosition={{ x: 100, y: -700 }}
      />
      <DraggableComponent2
        src="/real/hordi.png"
        name="호드리구"
        number="11"
        defaultPosition={{ x: 850, y: -1220 }}
      />
      <DraggableComponent2
        src="/real/chua.png"
        name="추아메니"
        number="6"
        defaultPosition={{ x: 560, y: -1110 }}
      />
      <DraggableComponent2
        src="/real/mille.png"
        name="밀리탕"
        number="4"
        defaultPosition={{ x: 740, y: -1150 }}
      />
    </div>
  );
};

export default App;
