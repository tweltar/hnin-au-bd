import React from "react";

const PhotoSection = ({ image, text, odd = false }) => {
  return (
    <div className="Photo-section">
      {odd && <p className="Memo-caption">{text}</p>}
      <img src={image} className="Memo-image" alt="" />
      {!odd && <p className="Memo-caption">{text}</p>}
    </div>
  );
};

export default PhotoSection;
