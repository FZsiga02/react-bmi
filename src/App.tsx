import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

interface State {
  result: number;
  heightValue: number;
  massValue: number;
  idealValue: number;
  idealScale: string;
  idealBool: boolean;
}

class App extends Component<{}, State> {

  constructor(props: {}) {
    super(props);

    this.state = {
      result: 0,
      heightValue: 0,
      massValue: 0,
      idealValue: 0,
      idealScale: '',
      idealBool: false,
    }
  }

  

  calculate = () => {
    this.setState({
      result: this.state.massValue / (this.state.heightValue / 100) ** 2
    });
    this.boolCalculate();
  }

  boolCalculate = () => {
    if (this.state.result <= 18.5) {
      this.setState({idealBool: false})
    } else if (this.state.result > 18.5 && this.state.result < 25) {
      this.setState({idealBool: true})
    } else if (this.state.result >= 25 && this.state.result < 30) {
      this.setState({idealBool: false})
    } else if (this.state.result >= 30 && this.state.result < 35) {
      this.setState({idealBool: false})
    } else if (this.state.result >= 35 && this.state.result < 40) {
      this.setState({idealBool: false})
    } else {
      this.setState({idealBool: false})
    }
    if (this.state.idealBool == false) {
      this.setState({
        idealValue: 20 * (this.state.heightValue / 100) ** 2
      })
    }
  }

  render() {
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
        <div id='calculator'>
          <label>Írja be cm-ben számított testmagasságát (cipő nélkül mérve): </label>
          <input type="number" id='height' onChange={(e) => this.setState({ heightValue: parseInt(e.currentTarget.value)})}/>
          <label> cm</label><br/>
  
          <label>Írja be kg-ban számított testsúlyát (cipő nélkül mérve): </label>
          <input type="number" id='mass' onChange={(e) => this.setState({ massValue: parseInt(e.currentTarget.value)})}/>
          <label> kg</label><br/>
  
          <button onClick={this.calculate}>Számítás</button>
        </div>
        <div id='tableDiv'>
          <p>AZ ÖN BMI ÉRTÉKE: </p><output id='BMI'>{ Math.round(this.state.result * 100) / 100 }</output><br/>
          <table id='table'>
            <tr className={ category == 'sovany' ? 'sarga' : '' }>
              <td>18,5 vagy kevesebb</td>
              <td>SOVÁNY</td>
            </tr>
            <tr className={ category == 'normal' ? 'sarga' : '' }>
              <td>18,5-24,9</td>
              <td>NORMÁL</td>
            </tr>
            <tr className={ category == 'tulsuly' ? 'sarga' : '' }>
              <td>25-29,9</td>
              <td>TÚLSÚLY</td>
            </tr>
            <tr className={ category == 'elhizas1' ? 'sarga' : '' }>
              <td>30-34,9</td>
              <td>I. FOKÚ ELHÍZÁS</td>
            </tr>
            <tr className={ category == 'elhizas2' ? 'sarga' : '' }>
              <td>35-39,9</td>
              <td>II. FOKÚ ELHÍZÁS</td>
            </tr>
            <tr className={ category == 'elhizas3' ? 'sarga' : '' }>
              <td>40 vagy több</td>
              <td>III. FOKÚ ELHÍZÁS</td>
            </tr>
          </table>
        </div>
        <div id='idealDiv'>
          <p>AZ IDEÁLIS TESTTÖMEGE: </p><output id='ideal'>{ Math.round(this.state.idealValue * 100) / 100 }</output><br/>
          <table id='idealTable'>
            <tr>
              <td><output id='idealValues'></output></td>
              <td>Kívánatos szélső érték</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
  
}

export default App;
