import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Home } from './../pages/home'
import { Dashboard } from './../pages/dashboard'

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
export default App
