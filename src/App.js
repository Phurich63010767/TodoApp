import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home.js'
import Main from './Main.js'
import { Button } from 'antd';

const App = () => {
  
  return (
    <Router>
      <div className="App">
          
          <Switch>

            <Route exact path="/">
              <Home />
              <div className="button">
                <Link to="/main">
                  <Button type="primary">Todo List</Button>
                </Link> 
              </div>
<<<<<<< HEAD
              <div className="button"><Button type="dashed" href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target="_blank">Free Nuggets</Button></div>
=======
              <div className="button"><Button type="primary" href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target="_blank">Free Nuggets</Button></div>
>>>>>>> d199678f9b226c9968cf0a03b2b6721393cab422
            </Route>

            <Route path="/main">
              <Main />
              <Link to="/">
                <Button>Home</Button>
              </Link>
            </Route>       

          </Switch>
      </div>
    </Router>
  );
}

export default App;