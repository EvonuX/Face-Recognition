import React from 'react';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="bodyWrapper">
      <div className="imageWrapper">
        <img id="inputimage" alt="" src={imageUrl} width="500px" height="auto"/>
        <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  );
}

export default FaceRecognition;