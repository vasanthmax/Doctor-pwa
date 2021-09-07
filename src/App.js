import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Appiontment from "./pages/Appiontment";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import DetailApp from "./pages/DetailAppiontment";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact component={Login} path="/login" />
          <Route exact component={Signup} path="/register" />
          <Route exact component={Home} path="/app/home" />
          <Route exact component={Search} path="/app/search" />
          <Route exact component={Appiontment} path="/app/appointments" />
          <Route exact component={Chat} path="/app/chat" />
          <Route exact component={Profile} path="/app/profile" />
          <Route exact component={DetailApp} path="/app/appointments/:id" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
