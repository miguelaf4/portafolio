import './Main.css'
import Home from './components/Pages/Home';
import Project1 from './components/Pages/Project1';
import Project2 from './components/Pages/Project2';
import Project3 from './components/Pages/Project3';
import Project4 from './components/Pages/Project4';
import CV from './components/Pages/Cv';
import NotFound from './components/Pages/NotFound';
import { Route, Switch } from 'react-router';
import React from 'react';


function App() {
  return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/portafolio/indusa-lab" component={Project1}/>
        <Route exact path="/portafolio/konter-website" component={Project2}/>
        <Route exact path="/portafolio/cess-redesign" component={Project3}/>
        <Route exact path="/portafolio/socialmedia-django" component={Project4}/>
        <Route exact path="/curriculum" component={CV} />
        <Route path="*" component={NotFound} />
      </Switch>
   
  );
}

export default App;
