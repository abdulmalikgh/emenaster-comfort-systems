import AppNav from './AppNav'
import Main from './Main'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <AppNav />
        <main id="main_container"> 
          <Switch>
              <Route  exact path="/">
                <Main />
              </Route>
          </Switch>
        </main>
    </Router>
  );
}

export default App;
