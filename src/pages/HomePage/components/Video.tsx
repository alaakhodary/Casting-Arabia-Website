import React from "react";

interface IPropVideo {
  url: string;
}

const Video: React.FC<IPropVideo> = (props) => {
  return (
    <video
      controls
      autoPlay
      muted
      className="h-[200px] w-full rounded-3xl max-lg:m-auto max-lg:w-fit"
    >
      <source src={props.url} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
};

export default Video;
