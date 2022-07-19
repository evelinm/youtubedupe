import VideoItem from "./VideoItem"


const VideoList = ({videos}) => {
console.log(videos)
        return (
            <div>
          {
              videos.map((video)=> (
               <VideoItem video={video}/>
              ))
          }
            
            </div>
        )
}
export default VideoList;