import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {UseStatePage} from "./use-state/UseStatePage";
import {ContextPage} from "./context/ContextPage";
import {RecoilPage} from "./recoil/RecoilPage";

function App() {
  return (
      <Router>
        <Switch>
          <Route path={"/use-state"}><UseStatePage/></Route>
          <Route path={"/context"}><ContextPage/></Route>
          <Route path={"/recoil"}><RecoilPage/></Route>
        </Switch>
      </Router>
  );
}

export default App;
