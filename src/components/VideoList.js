import VideoItem from "./VideoItem"


const VideoList = ({videos}) => {
console.log(videos)
        return (
            <div className=" ui relaxed divided list">
          {
              videos.map((video)=> (
               <VideoItem video={video}/>
              ))
          }
            
            </div>
        )
}
export default VideoList;