import React from "react";
import Draggable from "react-draggable";
import "../src/squardMaker.css";

const DraggableComponent = ({ src, name, defaultPosition, number }) => {
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
          {name}    {number}
        </p>
      </div>
    </Draggable>
  );
};

const App = () => {
  return (
    <div className="player_list">
      <DraggableComponent
        src="/images/hollan.png"
        name="엘링 홀란"
        number="9"
        defaultPosition={{ x: 560, y: 20 }}
      />
      <DraggableComponent
        src="/images/podden.png"
        name="필 포든"
        number="47"
        defaultPosition={{ x: 200, y: -100 }}
      />
      <DraggableComponent
        src="/images/kdb.png"
        name="케빈 더브라위너"
        number="17"
        defaultPosition={{ x: 340, y: -80 }}
      />
      <DraggableComponent
        src="/images/dias.png"
        name="후뱅 디아스"
        number="3"
        defaultPosition={{ x: 360, y: -30 }}
      />
      <DraggableComponent
        src="/images/covaci.png"
        name="코바치치"
        number="8"
        defaultPosition={{ x: 780, y: -400 }}
      />
      <DraggableComponent
        src="/images/walker.png"
        name="카일 워커"
        number="2"
        defaultPosition={{ x: 950, y: -380 }}
      />
      <DraggableComponent
        src="/images/song.png"
        name="에데르송"
        number="31"
        defaultPosition={{ x: 560, y: -380 }}
      />
      <DraggableComponent
        src="/images/dior.png"
        name="그바르디올"
        number="24"
        defaultPosition={{ x: 100, y: -680 }}
      />
      <DraggableComponent
        src="/images/silva.png"
        name="베르나르두 실바"
        number="20"
        defaultPosition={{ x: 890, y: -1200 }}
      />
      <DraggableComponent
        src="/images/rodri.png"
        name="로드리"
        number="16"
        defaultPosition={{ x: 560, y: -1130 }}
      />
      <DraggableComponent
        src="/images/stons.png"
        name="존 스톤스"
        number="4"
        defaultPosition={{ x: 740, y: -1130 }}
      />
    </div>
  );
};

export default App;
