import { render } from "@testing-library/react";
import SearchBar from "./SearchBar";
import youtube from "./api/youtube";
import { useCallback, useState } from 'react';
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";


const App = () => {

    const [videos,setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)


    const onTernmSubmit = async (term)  => {
      const response =  await youtube.get('/search',{
            params: {
                q: term
            },
        });
      setVideos(response.data.items)
    };


    const onVideoSelect = (video) => {
        setSelectedVideo(video)
    };

    return(
        <div className="ui container">
            <SearchBar onTernmSubmit={onTernmSubmit}/>
            <VideoDetails video={selectedVideo}/>
            <VideoList onVideoSelect={onVideoSelect} videos={videos}/>
        </div>
    )
}
export default App;