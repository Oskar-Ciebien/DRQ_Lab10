// Imports from React, Components and Bootstrap
import React from 'react';
import './App.css';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Header } from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// App Class - inherits from React.Component
class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          {/* Navbar for all components */}
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/sport">Sport</Nav.Link>
              <Nav.Link href="/travel">Travel</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar>

          {/* Switch that manages the pages on the application */}
          <Switch>
            {/* Route to the home page with the Content component */}
            <Route path='/' component={Content} exact></Route>
            {/* Route to the sport page with the Header Component */}
            <Route path='/sport' component={Header} exact></Route>
            {/* Route to the travel page with the Footer Component*/}
            <Route path='/travel' component={Footer} exact></Route>
          </Switch>

          {/* Calling Header Component */}
          {/* <Header></Header> */}
          {/* Calling Content Component */}
          {/* <Content></Content> */}
          {/* Calling Footer Component */}
          {/* <Footer></Footer> */}
        </div>
      </Router>
    );
  }
}

export default App;
