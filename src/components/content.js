// Imports from React and App.css
import React from 'react';
import '../App.css';

// Content Class Component - Inherits from React.Component
export class Content extends React.Component{

    render(){
        return(
            // Div with App.css import and the component code
            <div className="App">
                <h1>My Content in another component.</h1>
                <h1>Hello World!</h1>
                {/* H2 Showing Current Time */}
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}