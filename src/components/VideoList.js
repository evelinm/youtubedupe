import VideoItem from "./VideoItem"


const VideoList = ({videos,onVideoSelect}) => {
console.log(videos)
        return (
            <div className=" ui relaxed divided list">
          {
              videos.map((video)=> (
               <VideoItem onVideoSelect={onVideoSelect} video={video}/>
              ))
          }
            
            </div>
        )
}
export default VideoList;