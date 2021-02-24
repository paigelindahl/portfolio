import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Nav from './components/Nav';
import { ChakraProvider } from "@chakra-ui/react"


function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <Route exact path="/" component={Nav} />
          {/* <Route path="/blocks" component={Blocks} /> */}
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
