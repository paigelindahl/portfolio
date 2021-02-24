import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { HomePage } from './components/HomePage';
import Blocks from './components/Blocks';
import { ChakraProvider } from "@chakra-ui/react"


function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <Route exact path="/" component={HomePage} />
          <Route path="/blocks" component={Blocks} />
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
