import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Screen1 from './screens/screen1/';
import Screen2 from './screens/screen2/';
import Wrapper from './components/wrapper/';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {lightBlue500, deepOrange500} from 'material-ui/styles/colors';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: lightBlue500,
    accent1Color: deepOrange500,
  },
});


class Main extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
            <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
                <Route path="/" component={Wrapper}>
                    <Route path="/screen1" component={Screen1} />
                    <Route path="/screen2" component={Screen2} />
                    <IndexRedirect to="/screen1" />
                </Route>
            </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
