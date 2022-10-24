import './App.css'
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
export default function App() {
  return (
    <Router>
      <div className= "container">
         <p>Let's add Routing!</p>
      </div>
      <switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </switch>
   </Router>
        );
}
