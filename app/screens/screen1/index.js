import './styles.less';
import React from 'react';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';


class Screen1 extends React.Component {
  constructor(props) {
    super(props);
  }
  
  goToScreen2 = () => {
    browserHistory.push('/screen2');
  }

  render() {
    return (
      <div className="screen1-container">
        Hello World React. Screen 1. 
        <br/>
        <RaisedButton label="Go To Screen 2" secondary={true} onTouchTap={this.goToScreen2}/>
      </div>
    );
  }
}

export default Screen1;
