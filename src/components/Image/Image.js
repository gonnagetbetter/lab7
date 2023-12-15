import React, { useState } from "react";
import "./Image.css";

function Image() {
  const [displayImage, setDisplayImage] = useState(true);
  const [imageWidth, setImageWidth] = useState(400);

  const addImg = () => {
    setDisplayImage(true);
  };

  const upscaleImg = () => {
    setImageWidth((prevWidth) => prevWidth + 30);
  };

  const downscaleImg = () => {
    setImageWidth((prevWidth) => prevWidth - 30);
  };

  const removeImg = () => {
    setDisplayImage(false);
  };

  return (
    <div>
      <div id="images">
        <a href="https://odessa-life.od.ua/article/svo-i-vtoraja-mirovaja-pochemu-odessa-vazhna-dlja-zahvatchikov">
          <img
            src="https://odessa-life.od.ua/wp-content/uploads/2023/04/odesa-vid-zverhu-690x450.jpg"
            alt="Odessa"
            id="image"
            style={{
              display: displayImage ? "inline" : "none",
              width: `${imageWidth}px`,
            }}
          />
        </a>
      </div>

      <div class="buttonContainer">
        <button onClick={addImg} id="add">
          Додати
        </button>
        <button onClick={upscaleImg} id="upscale">
          Збільшити
        </button>
        <button onClick={downscaleImg} id="downscale">
          Зменшити
        </button>
        <button onClick={removeImg} id="remove">
          Видалити
        </button>
      </div>
    </div>
  );
}

export default Image;