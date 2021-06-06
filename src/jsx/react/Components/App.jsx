import * as React from 'react'
import {ConnectedPads, ConnectedMenu} from '@react/ReactRedux/ConnectedComponents.jsx'

const Component = React.Component;


export default class App extends Component {
    constructor(props) {
      super(props);
    }
    
    render() {
      return (
        <div id="drum-machine" className="MainWrap">
          <div className="AppWrap">  
            <ConnectedPads />
            <ConnectedMenu />
          </div>
        </div>
      );
    }
  }