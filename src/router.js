import React from 'react';
import { Switch, Route } from 'react-router';

import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import FullStory from './components/about/FullStory';
import Publications from './components/Publications/Publications';
// <Route to="" component></Route>
//         
//         

export default (
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route path='/about/fullstory' component={FullStory}></Route>
        <Route path="/resume" component={Resume}></Route>
        <Route path="/portfolio" component={Portfolio}></Route>
        <Route path="/publications" component={Publications}></Route>
    </Switch>

)