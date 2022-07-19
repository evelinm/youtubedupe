import { render } from "@testing-library/react";
import SearchBar from "./SearchBar";
import youtube from "./api/youtube";
import {  useState } from 'react';
import VideoList from "./VideoList";


const App = () => {

    const [videos,setVideos] = useState([])
    const onTernmSubmit = async (term)  => {
      const response =  await youtube.get('/search',{
            params: {
                q: term
            },
        });
      setVideos(response.data.items)
    };
    return(
        <div className="ui container">
            <SearchBar onTernmSubmit={onTernmSubmit}/>
       
            <VideoList videos={videos}/>
        </div>
    )
}
export default App;