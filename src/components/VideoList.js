import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videoList }) => {
  const renderedList = videoList.map((video) => {
    return <VideoItem video={video} />;
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
