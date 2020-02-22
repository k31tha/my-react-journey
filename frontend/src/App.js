import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SiteRoutes } from './components/routes/SiteRoutes';

export const clubListData =
  [{
    name: 'Woking FC',
    url: 'woking-fc',
    active: true,
    clubofficialwebsiteurl: 'https://wokingfc.co.uk/',
    logoname:'WokingLogo.png'
  },
  {
    name: 'Leyton Orient FC',
    url: 'leyton-orient-fc',
    active: false,
    clubofficialwebsiteurl:'',
    logoname:''
  },
  {
    name: 'Knaphill FC',
    url: 'knaphill-fc',
    active: true,
    clubofficialwebsiteurl: 'https://knaphill.co.uk/',
    logoname:''
  }
];


function App() {
  return (
    <Router>
    <div>
      <SiteRoutes clubs={clubListData} />
    </div>
    </Router>
  );
}

export default App;
