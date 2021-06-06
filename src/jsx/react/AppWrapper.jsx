import * as React from 'react'
import * as ReactRedux from 'react-redux'
import {store} from '@redux/store.js'
import {ConnectedApp} from '@react/ReactRedux/ConnectedComponents.jsx'

const Provider = ReactRedux.Provider;
const Component = React.Component;


export default class AppWrapper extends Component {
    render() {
      return (
        <Provider store={store}>
          <ConnectedApp />
        </Provider>
      );
    }
};