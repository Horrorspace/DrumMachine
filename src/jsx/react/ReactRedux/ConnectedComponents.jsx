import * as ReactRedux from 'react-redux'
import Pads from '@react/Components/Pads.jsx'
import Menu from '@react/Components/Menu.jsx'
import App from '@react/Components/App.jsx'
import {mapStateToProps} from '@react/ReactRedux/mapStateToProps.js'
import {mapDispatchToProps} from '@react/ReactRedux/mapDispatchToProps.js'

const connect = ReactRedux.connect;

export const ConnectedPads = connect(mapStateToProps, mapDispatchToProps)(Pads);
export const ConnectedMenu = connect(mapStateToProps, mapDispatchToProps)(Menu);
export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);