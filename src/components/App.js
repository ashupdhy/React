import React from 'react';
import SearchBar from './SearchBar';
import YouTube from '../api/YouTube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

class App extends React.Component{
    
    state = {videos: [], selectedVideo: null};
    CallApi = async (term) =>{
      const KEY = 'AIzaSyBL3LrcH0_fS_8Zr4mCzQvINsvQzBNaD7o';
      const videos = await YouTube.get("/search", {
        params: {
          q: term,
          part: "snippet",
          maxResults: 15,
          type: 'video',
          key: KEY
        }
      });
      this.setState({
        videos: videos.data.items,
        selectedVideo: videos.data.items[0]
      });
      console.log(this.state.videos);
    }
    onVideoSelect = (video) =>{
      this.setState({selectedVideo: video});
    }
    render(){
        
        return(
            <div className='ui container'>
                <SearchBar callApiSearch={this.CallApi}/>
                <div className="ui grid">
                  <div className="ui row">
                    <div className="eleven wide column">
                      <VideoDetails video={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                      <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                    </div>
                  </div>
                </div>
            </div>
        );
    }
}

export default App;
