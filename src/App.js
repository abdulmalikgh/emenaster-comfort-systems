import AppNav from './AppNav'
import Main from './Main'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <AppNav />
        <>
          <Switch>
              <Route path="/">
                <Main />
              </Route>
          </Switch>
        </>
    </Router>
  );
}

export default App;
