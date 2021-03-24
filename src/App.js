import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AppNav from './AppNav'
import Main from './Main'
import RequestService from './RequestService'
import UserRequests from './UserRequests'

function App() {
  return (
    <Router>
      <AppNav />
        <>
          <Switch>
              <Route  exact path="/">
                <Main />
              </Route>
              <Route exact path="/customer/service_request">
                <RequestService />
              </Route>
              <Route exact path="/customer/bookings">
                <UserRequests/>
              </Route>
          </Switch>
        </>
    </Router>
  );
}

export default App;
