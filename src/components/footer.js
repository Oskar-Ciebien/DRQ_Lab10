// Imports from React and App.css
import React from 'react';
import '../App.css';

// Content Footer Component - inherits from React.Components
export class Footer extends React.Component{

    render(){
        return(
            // Div with App.css import and component code
            <div className="App">
                <h1>My Footer in another component.</h1>
            </div>
        );
    }
}