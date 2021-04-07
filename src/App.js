import { BrowserRouter as Router, Switch, Route, HashRouter} from 'react-router-dom'
import AppNav from './AppNav'
import Main from './Main'
import RequestService from './RequestService'
import UserRequests from './UserRequests'
import Footer from './Footer'

function App() {
  return (
    <HashRouter>
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
      <Footer />
    </HashRouter>
  );
}

export default App;
