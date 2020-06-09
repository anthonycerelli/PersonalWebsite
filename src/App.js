import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/Home.js';
import WorkExperiencePage from './Pages/WorkExperience.js';
import ProjectPage from './Pages/Projects.js';
import NavBar from './Components/NavBar.js';

function App() {
        return (
            <BrowserRouter>
            <div className="App">
                <NavBar />
                <Switch>
                        <Route path="/" component={HomePage} exact />
                        <Route path="/WorkExperience" component={WorkExperiencePage} />
                        <Route path='/Projects' component={ProjectPage} />
                </Switch>
            </div>
            </BrowserRouter>
        );

}


export default App;
