// Imports from React and App.css
import React from 'react';
import '../App.css';

// Content Header Component - inherits from React.Component
export class Header extends React.Component{

    render(){
        return(
            // Div with App.css import and component code
            <div className="App">
                <h1>My Header in another component.</h1>
            </div>
        );
    }
}