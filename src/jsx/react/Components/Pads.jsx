import * as React from 'react'

const Component = React.Component;

export default class Pads extends Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.handlePush = this.handlePush.bind(this);
    }
    componentDidMount() {
      document.addEventListener('keydown', this.handlePush);
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handlePush);
    }
    handleClick(e) {
      this.props.clickButton(e.target.innerText)
    }
    handlePush(e) {
      this.props.pushButton(e.keyCode)
    }
    render() {
      const padItems = this.props.bank.pads.map(
        pad => 
        <li key={pad.name}>
          <button onClick={this.handleClick} className="drum-pad" id={pad.name}>
            {pad.key}
            <audio src={pad.src} className="clip" id={pad.key} />
          </button>
        </li>
      );
      return (
        <div className="PadsContainer">
          <ul className="PadsWrap">
            {padItems}
          </ul>
        </div>
      );
      }
    }