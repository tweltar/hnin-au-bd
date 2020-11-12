import React from "react";

const PhotoSectionH = ({ image, text, cls = "Memo-caption", odd = false }) => {
  return (
    <div className="Photo-section">
      {odd && <p className={cls}>{text}</p>}
      <img src={image} className="Memo-image" alt="" />
      {!odd && <p className={cls}>{text}</p>}
    </div>
  );
};

export default PhotoSectionH;
