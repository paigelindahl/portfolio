import React from 'react';
import { 
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { HomePage } from './components/HomePage';
import Blocks from './components/Blocks';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={HomePage}/>
        <Route path="/blocks" component={Blocks} />
      </div>
    </Router>
  );
}

export default App;
