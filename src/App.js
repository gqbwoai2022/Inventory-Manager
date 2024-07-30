import "./App.css"
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from "./pages/Login";
function App() {
  return (
    <Switch>
      {/* <Route exact path="/home" component={Main}></Route> */}
      <Route path="/login" component={Login}></Route>
      <Redirect from="/" to="/login" />
    </Switch>
  )
}

export default App
