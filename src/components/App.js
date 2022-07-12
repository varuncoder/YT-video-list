import React, { useState } from "react";
import SearchBar from "./SearchBar";
import youtubeAPI from "../apis/youtubeAPI";
import VideoList from "./VideoList";

const App = () => {
  const [videoList, setVideoList] = useState([]);
  const onSearchSubmit = async (term) => {
    const response = await youtubeAPI.get("/search", {
      params: {
        q: term,
      },
    });
    setVideoList(response.data.items);
  };

  return (
    <div className="ui container">
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <VideoList videoList={videoList} />
    </div>
  );
};

export default App;
