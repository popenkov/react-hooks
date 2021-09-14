import React from 'react'
import {Navbar} from './components/Navbar.jsx'
import {Home} from './pages/Home'
import {Profile} from './pages/Profile'
import {About} from './pages/About'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <div className="container pt-4">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/profile/:name" component={Profile}/>
          </Switch>
        </div>

    </BrowserRouter>
  );
}

export default App;
