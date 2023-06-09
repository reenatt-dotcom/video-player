import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Video from "./Video";
import "./styles.css";
const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    { label: "Gulls", value: "https://imgur.com/8EBxH2K.mp4" },
    { label: "Lions", value: "https://imgur.com/C5C7sqj.mp4" },
    { label: "Frog", value: "https://imgur.com/k0xjXNv.mp4" },
    { label: "Cow", value: "https://imgur.com/531ZxxC.mp4" }
  ];

  useEffect(() => {
    //set initial selected video
    setSelectedVideo(videos[videos.length - 1].value);
  }, []);
  //effect triggered only once
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Project 6: Video Player</h1>
      {/* pass props */}
      <Menu
        videos={videos}
        selectedVideo={selectedVideo}
        setSelectedVideo={setSelectedVideo}
      />
      {/* pass props if selectedVideo not null */}
      {selectedVideo && (
        <Video selectedVideo={selectedVideo} autoplay loop muted />
      )}
    </div>
  );
};

export default App;
