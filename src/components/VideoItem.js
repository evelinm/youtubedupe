import "../css/video-item.css";

const VideoItem = ({video, onVideoSelect}) => {

    return(
        <div onClick={(video)=>onVideoSelect(video)} className=" video-item item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url}/>
            <div className="content">
            <div className="header">
            {video.snippet.channelTitle}
            </div>
           
            </div>
         
        </div>
    )
}
export default VideoItem;