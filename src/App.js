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
import { Alert } from './components/Alert.js'
import {AlertState} from './context/alert/alertState'

function App() {
  return (
    <AlertState>
      <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert alert={{text: 'test'}}/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/profile/:name" component={Profile}/>
            </Switch>
          </div>

      </BrowserRouter>
    </AlertState>
  );
}

export default App;
