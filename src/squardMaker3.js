import React from "react";
import Draggable from "react-draggable";
import "../src/squardMaker.css";

const DraggableComponent3 = ({ src, name, defaultPosition, number }) => {
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
      <DraggableComponent3
        src="/at_madrid/morata.png"
        name="모라타"
        number="9"
        defaultPosition={{ x: 650, y: 40 }}
      />
      <DraggableComponent3
        src="/at_madrid/griz.png"
        name="그리즈만"
        number="7"
        defaultPosition={{ x: 420, y: -120 }}
      />
      <DraggableComponent3
        src="/at_madrid/coke.png"
        name="코케"
        number="8"
        defaultPosition={{ x: 430, y: -70 }}
      />
      <DraggableComponent3
        src="/at_madrid/himenes.png"
        name="히메네스"
        number="3"
        defaultPosition={{ x: 380, y: -50 }}
      />
      <DraggableComponent3
        src="/at_madrid/yoren.png"
        name="요렌테"
        number="13"
        defaultPosition={{ x: 880, y: -420 }}
      />
      <DraggableComponent3
        src="/at_madrid/molina.png"
        name="몰리나"
        number="2"
        defaultPosition={{ x: 950, y: -400 }}
      />
      <DraggableComponent3
        src="/at_madrid/oblack.png"
        name="얀 오블락"
        number="1"
        defaultPosition={{ x: 560, y: -380 }}
      />
      <DraggableComponent3
        src="/at_madrid/tanko.png"
        name="아스필리쿠에타"
        number="24"
        defaultPosition={{ x: 140, y: -700 }}
      />
      <DraggableComponent3
        src="/at_madrid/linu.png"
        name="사무엘 리누"
        number="11"
        defaultPosition={{ x: 200, y: -1050 }}
      />
      <DraggableComponent3
        src="/at_madrid/bichel.png"
        name="악셀 비첼"
        number="6"
        defaultPosition={{ x:650, y: -1170 }}
      />
      <DraggableComponent3
        src="/at_madrid/hermoso.png"
        name="에르모소"
        number="4"
        defaultPosition={{ x: 720, y: -1150 }}
      />
    </div>
  );
};

export default App;
