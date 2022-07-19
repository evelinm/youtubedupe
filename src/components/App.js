import { render } from "@testing-library/react";
import SearchBar from "./SearchBar";
import youtube from "./api/youtube";
import { useCallback } from 'react';


const App = () => {

    const onTernmSubmit = async (term)  => {
      const response =  await youtube.get('/search',{
            params: {
                q: term
            },
        });
       console.log(term)
    };
    return(
        <div className="ui container">
            <SearchBar onTernmSubmit={onTernmSubmit}/>
        </div>
    )
}
export default App;