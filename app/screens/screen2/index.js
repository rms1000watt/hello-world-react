import './styles.less';
import React from 'react';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';


class Screen2 extends React.Component {
  constructor(props) {
    super(props);
  }
  
  goToScreen1 = () => {
    browserHistory.push('/screen1');
  }

  render() {
    return (
      <div className="screen2-container">
        Hello World React. Screen 2.  
        <RaisedButton label="Go To Screen 1" secondary={true} onTouchTap={this.goToScreen1}/>
        <img src="/assets/images/flower.png"/>
      </div>
    );
  }
}

export default Screen2;
