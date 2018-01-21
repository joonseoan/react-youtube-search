import React from 'react';

// Why { vd }?
// ***** const VideoDetail = ( { vd } ) should be used when it receives or uses the defined property name itself in the parent component.
//       However, the new property name can be created and used such as "const VideoDetail = (  vdl  ) without curly bracket.
//       In this case, the contant variable tracking down the su-element
//       must define "vd" of the origianl property name at first. "const videoID = vdl.vd.id.videoId; ""
const VideoDetail = ( { vd } ) => {

    // ***** Without if statement it generats error because at the first glance, "vd" property is empty.
    if (!vd) {

        return (<div>Video is loading....</div>);

    }

    const videoID = vd.id.videoId;


    //1)
    /*
    const url = 'https://www.youtube.com/embed/' + videoID;
    */

    //2) 
    // It must use the backlit ``
    // It is exactly same as 1) above.
    // https://www.youtube.com/embed/ is for full screen of each item.
    const url = `https://www.youtube.com/embed/${videoID}`;

    // <iframe> : it supports mobile display layout of an web page
    return (
        <div className = "video-detail col-md-8">
            <div className = "embed-responsive embed-responsive-16by9">
                <iframe className = "embed-responsive-item" src = { url }></iframe>
            </div>
            <div className = "details">
                <div>{ vd.snippet.title }</div>
                <div>{ vd.snippet.description }</div>
            </div>

        </div>

    );

};

export default VideoDetail;