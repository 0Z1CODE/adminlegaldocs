import React, { Component } from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import { authProtectedRoutes, publicRoutes } from "./routes/";
import AppRoute from "./routes/route";
import NonAuthLayout from "./components/NonAuthLayout";
import Layout from "./components/Layout/Layout";
import { connect } from "react-redux";
import * as actions from "./store/user/actions";

class App extends Component {
  state = {  }

  componentDidMount() {
    this.props.onCurrentUserLoad()
  }
  render() { 
    return ( 
      
      <Router>
            <Switch>
              {publicRoutes.map((route, idx) => (
                <AppRoute
                  path={route.path}
                  layout={NonAuthLayout}
                  component={route.component}
                  key={idx}
                  isAuthProtected={false}
                  // isUserLoggedIn={this.props.IS_USER_LOGGED_IN}
                  // isMountDataLoaded={this.props.IS_MOUNT_DATA_LOADED}
                  
                />
              ))}

              {authProtectedRoutes.map((route, idx) => (
                  <AppRoute
                    path={route.path}
                    layout={Layout}
                    component={route.component}
                    key={idx}
                    isAuthProtected={true}
                    // isUserLoggedIn={this.props.IS_USER_LOGGED_IN}
                    // isMountDataLoaded={this.props.IS_MOUNT_DATA_LOADED}
                  />
              ))}
            </Switch>
          </Router>
    
     );
  }
}
 
const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => ({
  onCurrentUserLoad: () => dispatch(actions.getUserInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
