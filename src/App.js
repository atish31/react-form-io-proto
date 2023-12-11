import logo from './logo.svg';
import './App.css';
import { Formio } from "@formio/react";
import FormioContrib from "@formio/contrib";
import { Home } from "./Home";

Formio.use(FormioContrib);

function App() {
  return ( <>
      <Home />
    </>
  );
}

export default App;
