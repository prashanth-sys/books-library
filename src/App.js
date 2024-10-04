import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Books from "./components/Books";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/book" component={Books} /> 
        <Route exact path="/AboutUs" component={AboutUs} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
