import React, { useState } from "react";

export const Qr = () => {
  const [img, setImg] = useState("");
  const [load, setLoad] = useState(false);
  const [qrdata, setData] = useState("");
  const [qrsize, setSize] = useState("");

  function funimage() {
    setLoad(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrdata)}`;
      setImg(url);
    } catch (error) {
      console.error("Error generating QR", error);
    } finally {
      setLoad(false);
    }
  }

  function downloadQR() {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  }

  return (
    <div className="con">
      <h1 id="head">QR Code Generator</h1>
      {load && <p id="pa">Please wait...</p>}
      {img && <img src={img} alt="QR Code" />}
      <div>
        <h3 id="ho">Enter site link to generate QR code</h3>
        <input
          type="text"
          value={qrdata}
          id="box1"
          placeholder="Enter Site link"
          onChange={(e) => setData(e.target.value)}
        />
        <h3 id="ho2">Image size (e.g., 150)</h3>
        <input
          type="text"
          id="box2"
          value={qrsize}
          placeholder="Enter Image size"
          onChange={(e) => setSize(e.target.value)}
        />
        <button className="btn2" onClick={funimage}>
          Generate QR Code
        </button>
        <button className="btn1" onClick={downloadQR}>
          Download QR Code
        </button>
        <p>
          Designed by <span id="spa">HARISH</span>
        </p>
      </div>
    </div>
  );
};
