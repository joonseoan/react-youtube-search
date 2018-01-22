import React from 'react';

// props here is "vd" from "VideoList" in video_list.js
// 2)
// It is the second way we are able to define a new property that receives "vd", the property of VideoList component in video_list.js 
// Also, "vdl" becomes the constant variable. So we do not need to define new constant variable.
// Therefore, we do not need to use "props" and then define new constant variable like 1) 


const VideoListItem = ({vd, selected}) => {

//1)
// It is the first way to define and receive props from VideoList component in video_list.js
// However, we can make use of the way above.
/*
const VideoListItem = (props) => {}
    const video = props.vd;
    */

   // console.log({ vd, selected });

    // When we find the object and value, we are required to put the current object name.
    const VideoURL = vd.snippet.thumbnails.default.url;
    
    return (
        // In <img className="media-object" />, / is required because img tag does not have </img>.
        // It is a rule of JSX.
        // ***** (vd) of selected(vd) is selectedVideo in App components!!
        //       "selected" is from VideoList component in video_list.js
        //       "selected" of VideoList component from "onVideoList" of App component
        //       "onVideoList is an property using (selectedVideo) = > setState({selectedVideo})"
        //       Therefore, vd = "selectedVideo" and "selected" is a function 
        //              "selectedVideo = > setState({selectedVideo})" that passes "selectedVideo or vd"
        //       ****** We must use the property name directly from its parent.!!!!! 
        // selected(vd) ==> what???
        // ***** "selected" passes "vd"
           <li onClick = { () => selected(vd) }  className = "list-group-item">
            <div className = "video-list-media">
                <div className = "media-left">
                    <img className = "media-object" src = { VideoURL } />
                </div>
            </div>

            <div className = "media-body">
                <div className = "media-heading">{ vd.snippet.title }</div>
            </div>

        </li>
    );

};

export default VideoListItem;
