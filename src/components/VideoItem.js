

const VideoItem = ({video}) => {

    return(
        <div>
            <img src={video.snippet.thumbnails.medium.url}/>
            {video.channelTitle}
        </div>
    )
}
export default VideoItem;