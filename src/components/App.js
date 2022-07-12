import React, { useState } from "react";
import SearchBar from "./SearchBar";
import youtubeAPI from "../apis/youtubeAPI";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

const App = () => {
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onSearchSubmit = async (term) => {
    const response = await youtubeAPI.get("/search", {
      params: {
        q: term,
      },
    });
    setVideoList(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="ui container">
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetails video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videoList={videoList} onVideoSelect={onVideoSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
