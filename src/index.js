
// use React variable from 'react' library or moduel.
import React, { Component } from 'react';

// ReactDOM is working with React Variable. It defines the DOM of React variable.
import ReactDOM from 'react-dom';


//YoutubeSearch is like variable. It is up to myself.
import YoutubeSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

import VideoList from './components/video_list';

import VideoDetail from './components/video_detail';

import YTKey from './components/youtube_key';


// Fetching data : React is a data passing down architect.
// For instance, children are required to use a data such as Youtube API keys
// The toppest component of App should fetch the data and pass down the data to its children component.
const API_KEY = YTKey;


// It is a kind of JQuery function using the arguments.
// The first argument is about configuration. 
//    - For intance, by delivering the API key, we are able to access Youtube
//    - by entering 'funny', we are able to receive data related 'funny'
//    - FYI, data format Youtube provides is an Object. 
//      So we query data in a format of Object like {key: API_KEY, term: 'funny'}. 
// The second argument is call back function. 
//    - If the program accesses the Youtube API with permission, 
//    - and if it finds the data about 'funny',
//      the function assigned to the second argument makes the data in an Object type in Array and shows these data automatically in the console.
//    - In this case, the user does not jump in or meddle in this call. The call occurs automatically.
// 1)
/*
YoutubeSearch({key: API_KEY, term: 'funny'}, function(data) {
    console.log (data)
}); */


// Create a new component. This component should produce 
// some HTML

// I learned const and function of ES6 here.
// I learned what JSX is in this module, too.
//  - JSX is a compiler for ES6 syntax to vanila javascript, which is javascript.

/* 1)
const App = function()
//const is a piece of ES6 syntax.
// it is a kind of constant. The APP variable does not able to get any other value or fucnction in this case.

{
    return <div>Hi!</div>;
}*/

/*
2)
const App = () => 
// It is identical of function key word.

{
    return <div>Hi!</div>;
} */

//It is still functional-based component.
// state must not be available.
// Please, note that functional-based component is able to enclose class components like below.
//3)
/*
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}
*/

// We need to change functional component to class component
// because we needs stored data in state Object which encloses the changing data.
//
//4)
class App extends Component {

    // construnctor is still to define attributes.
    // ** The attribute is static data. Therefore, it does not start to run unitl it is retrieved.
    // Also, the function in this constructor is not run until it is retrieved.
    // Therefore, "videos" property is still empty even though there is call back function
    // It is retrieved by "return()" / or "render()""
    constructor (props) {
        super(props);

        // Property name is videos.
        // This video property will have array of video lists.
        // The reason of array used is because data is delivered to a bunch of video items
        // and also because data received is formed in array.
        
        // this.state is able to have many ojbects.
        this.state = {
            videos : [],
            selectedVideo : null
        };

        //2)
        // I moved this function to fill out data in the array above.
        // Without this function with this location, no information will show up when we initilize the program.
        YoutubeSearch({key: API_KEY, term: 'funny'}, (data) => {

            // Just remind that videos are the property above, and data is in format of an array.
            // This is still callback function. So the data is received and is going to fill out 'this.state'.
            this.setState ({
                videos: data,

                //Here, data must be used because the argument is "data".
                selectedVideo: data[0]
            });
            
        });

        
            /*
        YoutubeSearch({key: API_KEY, term: 'funny'}, (videos) => {

            // When we are using same property name as argument name, we are able to condense the code as followed.
            
            this.setState({ videos });

        }); */

    }
 
    render () {
        console.log (this.state.videos);
        console.log (this.state.selectedVideos);

        // [FYI]Contrast to state which must be defined in a constructor,
        // "props" can be located anywhere.
        // So props can receive data anywhere from any components 
        //  this.props 
        
        // '<VideoList video = { this.state.videos } />' is way to pass down the data of the parent component
        // to its child component "VideoList"
        // When it delivers the data, the data must be using 'props' 
        // so that the child componet is able to receive data of 'props'
        // In App component, the data is still variable and changing so that the 'state' object is still required.
        // Inner of App component, "video", not "videos" is a "props"!!!!  
        // Please, go to video_list.js and find the example of (0) 'props' that represents this explaination. 
        
        // In the first retrieve, <VideoDetail videoDetail = {this.state.videos[0]}/> is still empty.
        // because call back function is still not run in constructor above.
        // Therefore, {this.state.videos[0]} delivers the undefined or empty value in the first trial.

        // In the second retrieval, this.state.vidoes stores the data.
        // Please, try out "console.log(this.state.videos)"

        // When the child component uses the property itself, for instance "state.videos"
        // it is not going to trouble, the child component still waits on the property like in VideoList in video_list.js
        // However, the error occurs when the child component uses an element of the property such as "id" in the property.
        // because when the child property receives the Object, there would be empty and then empty ID in the property.
       
        //1)
       // When using "videos" property only,
       /*
        return (
            <div>
                <SearchBar />
                <VideoDetail vd = { this.state.videos[0] } />
                <VideoList video = { this.state.videos } />
            </div>   
        ); */

        //2)
        // By adding selectedVideo, we get to chanbe property name to "this.state.selectedVideo"
        // "clickedVideo" is (vd) of "selected(vd)" of VideoListItems in video_list_item
        return (
            <div>
                <SearchBar />
                <VideoDetail vd = { this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect = { clickedVideo => this.setState({ selectedVideo : clickedVideo })}
                    video = { this.state.videos } />
            </div>   
        );  
        
       

       
    }
   
    
}
// App=5; ==> error.

//Take this component's generated HTML and put it on the page (in the Dom)
ReactDOM.render(<App />, document.querySelector('.container'));