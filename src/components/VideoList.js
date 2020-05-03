import React from 'react';
import VideoItem from './VideoItem';
const VideoList = ({videos,onVideoSelect}) =>{
    const listToDisplay = videos.map(Video=>{
        return <VideoItem key={Video.id.videoId} video={Video} onVideoSelect={onVideoSelect}/>
    });
    return(
    <div className='ui relaxed devided list'>{listToDisplay}</div>

    );
}
export default VideoList;