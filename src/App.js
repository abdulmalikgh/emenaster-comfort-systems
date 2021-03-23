import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AppNav from './AppNav'
import Main from './Main'
import RequestService from './RequestService'
function App() {
  return (
    <Router>
      <AppNav />
        <>
          <Switch>
              <Route  exact path="/">
                <Main />
              </Route>
              <Route exact path="/service_request">
                <RequestService />
              </Route>
          </Switch>
        </>
    </Router>
  );
}

export default App;
