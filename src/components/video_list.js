import React from 'react';

// It means that children are able to import and export components mutually
// The reason importing VideoListItem is because deliver data received from App component to send VideoListItem component.
// return (<VideoListItem vd = { vdList }/>);
// [FYI] Variable component does not have render() {} function. 
//       Therefore, it uses "return". "return" executes the same role of "render()".
import VideoListItem from './video_list_item';

// example (0)
/*
const VideoList = (props) => {

   // "props.video" : "the defined 'video' in App component". It is an array" of props object.
   // The property name must be same!!!! as props of render function in App. : <VideoList video = { this.state.videos } /> 
   const videobunch = props.video;
};
*/

const VideoList = (props) => {
    
    // Please, just notice that "video" is a property in App componet.
    // "vdList" here is an argument to call the entire elements in the array. Please, refer to array.map()!!!
    
   
    const VideoItems = props.video.map((vdList) => {

        // return value to return below because it is retrieved by return value. 
        // In other words, it is called in the same function or variable.
        
         // [Unique Key]
    // IMPORTANT!!!: React needs unique key for each element to use map or loop statements or functions for array
    //               if each type of the elements is all same.

    /*
    Example 1) when we are not find the specific unique id in data frame
            : use data it is
    function NameList(props){
            const names = props.names;
            const listItem = names.map((name) =>
                //키값 추가 
                <li key={name.toString()}>{name}</li>
            );
        
        
    Example 2) When data frame has a unique ID,
            : use those IDs

            const todoItems = todos.map((todo) =>
          <li key={todo.id}>
            {todo.text}
          </li>
         );

    Example 3) When data frame does not have any unique ID and even data has same elements
            : use index of the array.

            const todoItems = todos.map((todo) =>
              <li key={todo.id}>
                {todo.text}
              </li>
            );

     */


    // Without the the key, it does not allow to find the element in an array. (Remember!!!!)
    // Then, it will throw away all elements of the array.
    // Therefore, it does throw away them and render() again without the key.
    // Youtube video has a unique "etag", a key of each video item. So we can use this key for the unique ID.
    // Key must be in same component where map or loop statements exist!!!!
        return (<VideoListItem 
            
            selected = { props.onVideoSelect }
            key = { vdList.etag } 
            vd = { vdList }
            
            
            />);        

    });
    
    // return value to App component because it is retrieved by App component.
    return (
        <ul className="col-md-4 list-group">
            { VideoItems }

        </ul>
    );
};

export default VideoList;