import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HelloPage from "./components/helloPage/helloPage";
import Main from "./components/main/main";
import DishesInfo from "./components/dishesInfo/dishesInfo";
import Basket from "./components/basket/basket";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route  exact path="/" component={HelloPage}/>
        <Route path="/main" component={Main}/>
        <Route path="/dishes-info/:id" component={DishesInfo}/>
        <Route path="/basket" component={Basket}/>
      </Switch>
    </div>
  );
}

export default App;
