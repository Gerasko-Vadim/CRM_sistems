import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HelloPage from "./components/helloPage/helloPage";
import Main from "./components/main/main";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route  exact path="/" component={HelloPage}/>
        <Route path="/main" component={Main}/>
          
      </Switch>
    </div>
  );
}

export default App;
