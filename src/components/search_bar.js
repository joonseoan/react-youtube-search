//It is used to import class component of React
// So the class can be written like 3) below.
import React, { Component } from 'react';

// It is used WITHOUT 'class component'
//import React from 'react';


/*1)
const SearchBar = () => {
return (

    <input />);
}; */

// ES6 class to receive React.Component
/*
class SearchBar extends React.Component {

    // class components -> render method.
    render() {
        return ( <input />);

    }

} */

//3) React.Component is deleted.
class SearchBar extends Component {
    
    // "state" is an Ojbect used to record React's user event!!!!
    // It is only working in class-based component.
    // Whentver state is changed, class component re-renders!!!
    // It makes child's compoents re-render as well.
    // It shakes render method!!

    // Initialize "state", set the property "state" inside of constructor method.
    //  1) set out "construnctor"
    //  2) put this.state insie of constructor. It must be once in custructor
    //  3) assign Oject of instance.

    constructor(props)
    {
        super(props);
        
        // Please, find the 4) below in render method.
        this.state = { term: '' };
    }
    
    
    // class components -> render method.
    render() {

        //This section is used to monitor the result of the event handler.
        //By using 'onChange' of javascript event handler
        //the input receives the changing value from the event handler below.
        // fyi) onChange = whenever the user types in the input tag, the event is changing.
        // 1) 
        //return ( <input onChange={this.onInputChange} />);    
    
         
        //put onChangeInput event handler, a method in the input tag by using arrow function
        // 2)
        //return ( <input onChange = {(event) => console.log (event.target.value)} />);
        // return ( <input onChange = {event => console.log (event.target.value)} />);

        // By using state, it records the value and deliver the App component in index.js
        //4)
        return (
            
            
            // setState is an only way to change value of term in consgtructor.
            // controller : value = { this.state.term }
            // : So control component only recieves the value from setState  
            // The key is that "onChange = {event => this.setState({ term: event.target.value })} />" does not change the value.
            // It is a trigger. 
            // The controlled component "value" received the change only when the render executes again.
        /*
        //1)
        <div className="search-bar">
            <input
                value = {this.state.term} 
                onChange = {event => this.setState({ term: event.target.value })} />
           
        </div>
        */

        // term is an input data from the user.
        // the term is assgined to a "value" attribute
        // "event.target.value" changes data of "value" by using "onInputChange" function
        // "onChange" and "event" are components of the event handler.

        // [FYI] "onClick" format or syntax is different from "onChange"
        // In case of "onChange", it is required to us event.target.value
        //2)
        <div className = "search-bar">
            <input
                value = { this.state.term } 
                onChange = { event => this.onInputChange(event.target.value) } />
           
        </div>

        );
 
    }

    onInputChange(term) {

        this.setState({ term });
        this.props.onSearch(term);

    }

    // event handler (whenever the event occurs, it is the guide of action)
    // event: typing in!!!
    // event.target.value : enter "event" into "input" tag with value which typed in.
    /* 1)
    onInputChange(event)
    {
        console.log(event.target.value);
    }
    */

    
}

export default SearchBar;