import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Inspection from './pages/Inspection';
import Purchase from './pages/Purchase';
import NotFound from './pages/NotFound';

import A1A2 from './pages/doc/A1A2';
import A3 from './pages/doc/A3';
import B3 from './pages/doc/B3';
import C from './pages/doc/C';
import W1 from './pages/doc/W1';
import W from './pages/doc/W';
import B1 from './pages/doc/B1';
import F from './pages/doc/F';
import G from './pages/doc/G';
import I from './pages/doc/I';
import F2 from './pages/doc/F2';
import OX2 from './pages/doc/OX2';
import H1H3H31 from './pages/doc/H1H3H31';
import H2H2AH4H41 from './pages/doc/H2H2AH4H41';
import I1 from './pages/doc/I1';
import P1 from './pages/doc/P1';
import L1 from './pages/doc/L1';
import ScrollToTop from './hooks/ScrollToTop';

function App() {
  return (
    <Switch>
      <ScrollToTop>
        <Route path='/' component={Login} exact />
        <Route path='/home' component={Home} />
        <Route path='/inspectionList' component={Inspection} />
        <Route path='/purchase' component={Purchase} />
        <Route path='/doc/A1' component={A1A2} />
        <Route path='/doc/A2' component={A1A2} />
        <Route path='/doc/A3' component={A3} />
        <Route path='/doc/B1' component={B1} />
        <Route path='/doc/B3' component={B3} />
        <Route path='/doc/C' component={C} />
        <Route path='/doc/W' component={W} />
        <Route path='/doc/W1' component={W1} />
        <Route path='/doc/F' component={F} />
        <Route path='/doc/F2' component={F2} />
        <Route path='/doc/G' component={G} />
        <Route path='/doc/I' component={I} />
        <Route path='/doc/I-1' component={I1} />
        <Route path='/doc/OX2' component={OX2} />
        <Route path='/doc/H1' component={H1H3H31} />
        <Route path='/doc/H2' component={H2H2AH4H41} />
        <Route path='/doc/H2-A' component={H2H2AH4H41} />
        <Route path='/doc/H3' component={H1H3H31} />
        <Route path='/doc/H3-1' component={H1H3H31} />
        <Route path='/doc/H4' component={H2H2AH4H41} />
        <Route path='/doc/H4-1' component={H2H2AH4H41} />
        <Route path='/doc/P1' component={P1} />
        <Route path='/doc/L1' component={L1} />
      </ScrollToTop>
      <Route path='*' component={NotFound} />
    </Switch>
  );
}

export default App;
