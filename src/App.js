import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HelloPage from "./components/helloPage/helloPage";
import Main from "./components/main/main";
import DishesInfo from "./components/dishesInfo/dishesInfo";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route  exact path="/" component={HelloPage}/>
        <Route path="/main" component={Main}/>
        <Route path="/dishes-info" component={DishesInfo}/>
      </Switch>
    </div>
  );
}

export default App;
