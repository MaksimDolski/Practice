import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch> {/* using Switch component - only one route shows in one time */}
            <Route exact path="/"> <Home /> </Route>
            <Route path="/create"><Create /></Route>
            <Route path="/blogs/:id"><BlogDetails /></Route>
          </Switch> 
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;

// npx json-server --watch data/db.json --port 8000
// npm install react-router-dom
// sfc - stateless function component