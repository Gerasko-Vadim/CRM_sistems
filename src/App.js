import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HelloPage from "./components/helloPage/helloPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <HelloPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
