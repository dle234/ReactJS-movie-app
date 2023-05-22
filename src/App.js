import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return <Router>
    <Switch>
      <Route path='/movie/:id'>
        < Detail />
      </Route>
      <Route path='/'>
        <Home />
      </Route>




    </Switch>
  </Router >

}

export default App;
// 루트가 / 일때 Home 컴포넌트 보여줌... //