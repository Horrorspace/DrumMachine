import * as React from 'react'

const Component = React.Component;

export default class Menu extends Component {
    constructor(props) {
      super(props);
      this.handleVolChange = this.handleVolChange.bind(this);
      this.handlePowerChange = this.handlePowerChange.bind(this);
      this.handleBankChange = this.handleBankChange.bind(this);
    }
    handleVolChange(e) {
      this.props.changeVol(e.target.value);
    }
    handlePowerChange() {
      this.props.switchPower();
    }
    handleBankChange(e) {
      const bankName = e.target.value;
      const bankToChange = this.props.banks.filter(
        val => {
          if(val.name === bankName) {
            return true
          }
          else {
            return false
          }
        }
      );
      
      this.props.changeBank(bankToChange[0])
    }
    render() {
      const bankItems = this.props.banks.map(
            bank => 
            <option className="dropdown-item">
                {bank.name}
            </option>
          );
      return (
        <div className="MenuWrap">
          <input
                max='1'
                min='0'
                step='0.01'
                type='range'
                value={this.props.vol}
                onChange={this.handleVolChange}
                className="VolControl"
          />
          
          <label className="switch">
            <input
                  type='checkbox'
                  checked={this.props.power}
                  onChange={this.handlePowerChange}
                  className="PowerControl"
            />
            <span className="slider round"></span>
          </label>
          <select onChange={this.handleBankChange} className="BankControl">
            {bankItems}
          </select>
          <div id="display" className="display">
            <h2 className="displayText">{this.props.displayMessage}</h2>
          </div>
        </div>
      );
      }
}