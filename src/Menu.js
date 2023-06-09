import React, { useState } from "react";
//takes 3 props
const Menu = ({ videos, selectedVideo, setSelectedVideo }) => {
  const [checkedVideo, setCheckedVideo] = useState(selectedVideo);
  //updates selected and checked as props
  const handleVideoChange = (event) => {
    const value = event.target.value;
    setSelectedVideo(value);
    setCheckedVideo(value);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {videos.map((video) => (
        <div key={video.value} style={{ margin: "10px" }}>
          <label>
            <input
              type="radio"
              value={video.value}
              checked={checkedVideo === video.value}
              onChange={handleVideoChange}
            />
            {video.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Menu;
