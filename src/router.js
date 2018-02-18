import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import FullStory from './components/about/FullStory';
import Publications from './components/Publications/Publications';
import GraphicDesign from './components/portfolio/GraphicDesign';
import WebDevelopment from './components/portfolio/WebDevelopment';
// <Route to="" component></Route>
//         
//         

export default (
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route path='/about/fullstory' component={FullStory}></Route>
        <Route exact path="/portfolio" component={Portfolio}></Route>
        <Route path="/portfolio/webdevelopment" component={WebDevelopment}></Route>
        <Route path="/portfolio/graphicdesign" component={GraphicDesign}></Route>
        <Route path="/publications" component={Publications}></Route>
    </Switch>

)