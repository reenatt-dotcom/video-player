import React, { useEffect, useRef } from "react";
import "./styles.css";
const Video = ({ selectedVideo, ...props }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.autoplay = true;
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        src={selectedVideo}
        controls
        width="400"
        {...props}
      />
    </div>
  );
};

export default Video;
