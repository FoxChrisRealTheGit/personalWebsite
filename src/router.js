import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import FullStory from './components/about/FullStory';

import WebDevelopment from './components/portfolio/WebDevelopment';
import BreakpointPublishing from "./components/portfolio/WebDevelopment/breakpoinpublishing";
import ataraxylifenon from "./components/portfolio/WebDevelopment/ataraxylifenonprofit";
import ataraxyclothing from "./components/portfolio/WebDevelopment/ataraxyclothing";
import peaxgames from "./components/portfolio/WebDevelopment/peaxgames";
import reactstylux from "./components/portfolio/WebDevelopment/reactstylux";
import aristos from "./components/portfolio/WebDevelopment/aristos";
import twoLiesandOneTruth from "./components/portfolio/WebDevelopment/2liesand1truth"
import ataraxylife from "./components/portfolio/WebDevelopment/ataraxylife";
import foxxyhats from "./components/portfolio/WebDevelopment/FoxxyHats";

import GraphicDesign from './components/portfolio/GraphicDesign';
import nightmaresposter from "./components/portfolio/GraphicDesign/nightmaresofptom";
import restarauntproject from "./components/portfolio/GraphicDesign/restarauntproject";
import magazinecoverclone from "./components/portfolio/GraphicDesign/magazineCoverClones";
import lanzorettecalender from "./components/portfolio/GraphicDesign/lanzorretecalender";
import grooperLogo from "./components/portfolio/GraphicDesign/grooperlogo";

import Publications from './components/Publications/Publications';
import GenderedNovelView from "./components/Publications/Novels/Gendered";
import AloneNovelView from "./components/Publications/Novels/Alone";
import IWantedToDieView from "./components/Publications/non-fiction/IWantedToDie";
import cryptocurrencyhistoryview from "./components/Publications/non-fiction/cryptocurrencyaHistory";
import DadAndOtherDad from "./components/Publications/Misc Scripts/DadAndOtherDad";
export default function Router() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>

        <Route exact path="/about" component={About}></Route>
        <Route path='/about/fullstory' component={FullStory}></Route>

        <Route exact path="/portfolio" component={Portfolio}></Route>

        <Route exact path="/portfolio/webdevelopment" component={WebDevelopment}></Route>
        <Route path="/portfolio/webdevelopment/breakpointpublishing" component={BreakpointPublishing}></Route>
        <Route path="/portfolio/webdevelopment/ataraxylife-nonprofit" component={ataraxylifenon}></Route>
        <Route path="/portfolio/webdevelopment/ataraxyclothing" component={ataraxyclothing}></Route>
        <Route path="/portfolio/webdevelopment/peaxgames" component={peaxgames}></Route>
        <Route path="/portfolio/webdevelopment/reactstylux" component={reactstylux}></Route>
        <Route path="/portfolio/webdevelopment/aristos" component={aristos}></Route>
        <Route path="/portfolio/webdevelopment/twoliesandonetruth" component={twoLiesandOneTruth}></Route>
        <Route path="/portfolio/webdevelopment/ataraxylife" component={ataraxylife}></Route>
        <Route path="/portfolio/webdevelopment/foxxyhats" component={foxxyhats}></Route>

        <Route exact path="/portfolio/graphicdesign" component={GraphicDesign}></Route>
        <Route path="/portfolio/graphicdesign/restarauntproject" component={restarauntproject}></Route>
        <Route path="/portfolio/graphicdesign/nightmaresposter" component={nightmaresposter}></Route>
        <Route path="/portfolio/graphicdesign/lanzorettecalender" component={lanzorettecalender}></Route>
        <Route path="/portfolio/graphicdesign/grooperlogo" component={grooperLogo}></Route>
        <Route path="/portfolio/graphicdesign/magazineclonecovers" component={magazinecoverclone}></Route>

        <Route exact path="/publications" component={Publications}></Route>
        <Route path="/publications/gendered" component={GenderedNovelView}></Route>
        <Route path="/publications/alone" component={AloneNovelView}></Route>
        <Route path="/publications/iWantedtodie" component={IWantedToDieView}></Route>
        <Route path="/publications/cryptocurrencyhistory" component={cryptocurrencyhistoryview}></Route>
        <Route path="/publications/dadandotherdad" component={DadAndOtherDad}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

