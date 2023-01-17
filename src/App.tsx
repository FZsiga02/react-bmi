import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

interface State {
  result: number;
  heightValue: number;
  massValue: number;
}

class App extends Component<{}, State> {

  constructor(props: {}) {
    super(props);

    this.state = {
      result: 0,
      heightValue: 0,
      massValue: 0,
    }
  }

  

  calculate = () => {
    this.setState({
      result: this.state.massValue / (this.state.heightValue / 100) ** 2
    });
  }

  render() {
    const idealBMI = 21.75;
    const idealMass = idealBMI * (this.state.heightValue / 100) ** 2;
    const idealLowest = 18.5 * (this.state.heightValue / 100) ** 2;
    const idealHighest = 18.5 * (this.state.heightValue / 100) ** 2;

    let category = '';
    if (this.state.result <= 18.5) {
      category = 'sovany';
    } else if (this.state.result > 18.5 && this.state.result < 25) {
        category = 'normal'
    } else if (this.state.result >= 25 && this.state.result < 30) { 
        category = 'tulsuly'
    } else if (this.state.result >= 30 && this.state.result < 35) {
        category = 'elhizas1'
    } else if (this.state.result >= 35 && this.state.result < 40) {
        category = 'elhizas2'
    } else {
        category = 'elhizas3'
    }

    return (
      <div className="App">
        <div>
          Írja be cm-ben számított testmagasságát (cipő nélkül mérve):
          <input type="number" onChange={(e) => this.setState({ heightValue: parseInt(e.currentTarget.value)})}/> cm
        </div>
        <div>
          Írja be kg-ban számított testsúlyát (cipő nélkül mérve):
          <input type="number" onChange={(e) => this.setState({ massValue: parseInt(e.currentTarget.value)})}/> kg
          </div>
          <div>
          <button onClick={this.calculate}>Számítás</button>
        </div>
        <div>AZ ÖN BMI ÉRTÉKE: { this.state.result.toFixed(2) }</div>
        <div>
          <table>
            <tr className={ category == 'sovany' ? 'sarga' : '' }>
              <td>18,5 vagy kevesebb</td>
              <th>SOVÁNY</th>
            </tr>
            <tr className={ category == 'normal' ? 'sarga' : '' }>
              <td>18,5-24,9</td>
              <th>NORMÁL</th>
            </tr>
            <tr className={ category == 'tulsuly' ? 'sarga' : '' }>
              <td>25-29,9</td>
              <th>TÚLSÚLY</th>
            </tr>
            <tr className={ category == 'elhizas1' ? 'sarga' : '' }>
              <td>30-34,9</td>
              <th>I. FOKÚ ELHÍZÁS</th>
            </tr>
            <tr className={ category == 'elhizas2' ? 'sarga' : '' }>
              <td>35-39,9</td>
              <th>II. FOKÚ ELHÍZÁS</th>
            </tr>
            <tr className={ category == 'elhizas3' ? 'sarga' : '' }>
              <td>40 vagy több</td>
              <th>III. FOKÚ ELHÍZÁS</th>
            </tr>
          </table>
        </div>
        <div>AZ IDEÁLIS TESTTÖMEGE: { idealMass + 'kg' }</div>
        <div>
          <table>
            <tr>
              <td>{ idealLowest + '-' + idealHighest + 'kg' }</td>
              <td>Kívánatos szélső érték</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
  
}

export default App;
