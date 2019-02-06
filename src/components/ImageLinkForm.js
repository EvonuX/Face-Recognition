import React from 'react';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <div>
        <div className="formWrapper">
          <input type="text" placeholder="Paste an image link..." onChange={onInputChange}/>
          <button onClick={onButtonSubmit}>Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;