
// use React variable from 'react' library or moduel.
import React from 'react';

// ReactDOM is working with React Variable. It defines the DOM of React variable.
import ReactDOM from 'react-dom';


//YoutubeSearch is like variable. It is up to myself.
import YoutubeSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

import YTKey from './components/youtube_key';

const API_KEY = YTKey;

YoutubeSearch({key: API_KEY, term: 'surfboards'}, function(data) {
    console.log (data)
});


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
const App = () => 
// It is identical of function key word.

{
    return <div>Hi!</div>;
} */

//It is still functional-based component.
// state must not be available.
// Please, note that functional-based component is able to enclose class components like below.
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// App=5; ==> error.

//Take this component's generated HTML and put it on the page (in the Dom)
ReactDOM.render(<App />, document.querySelector('.container'));