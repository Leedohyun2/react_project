import React, { useRef } from "react";
import html2canvas from "html2canvas";
import saveAs from "file-saver";

export default function Capture() {
  const divRef = useRef(null);

  const handleDownload = async () => {
    if (!divRef.current) return;

    try {
      const div = divRef.current;
      const canvas = await html2canvas(div);
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, "result.png");
        }
      });
    } catch (error) {
      console.error("Error converting div to image:", error);
    }
  };
  return (
    <div className="App">
      <div
        ref={divRef}
        style={{ backgroundColor: "skyblue", width: "800px", height: "200px" }}
      >
        <h1>Hello CodeSandbox</h1>
        <h2>Capture Zone</h2>
      </div>
      <button onClick={handleDownload}>이미지 다운로드</button>
    </div>
  );
}
