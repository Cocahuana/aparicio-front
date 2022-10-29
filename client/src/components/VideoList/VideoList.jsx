import React from "react";
import VideoItem from "./VideoItem/VideoItem";
function VideoList({videos}) {
	return (
		<>
			{videos.map((video) => (
				<VideoItem video={video} />
			))}
		</>
	);
}

export default VideoList;
