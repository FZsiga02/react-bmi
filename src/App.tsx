import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id='calculator'>
        <label>Írja be cm-ben számított testmagasságát (cipő nélkül mérve): </label>
        <input type="number" id='height'/>
        <label> cm</label><br/>

        <label>Írja be kg-ban számított testsúlyát (cipő nélkül mérve): </label>
        <input type="number" id='mass'/>
        <label> kg</label><br/>

        <button id='calculate'>Számítás</button>
      </div>
      <div id='tableDiv'>
        <p>Az ön BMI értéke: </p><output id='BMI'></output><br/>
        <table id='table'>
          <tr>
            <td>18,5 vagy kevesebb</td>
            <td>Sovány</td>
          </tr>
          <tr>
            <td>18,5-24,9</td>
            <td>Normál</td>
          </tr>
          <tr>
            <td>25-29,9</td>
            <td>Túlsúly</td>
          </tr>
          <tr>
            <td>30-34,9</td>
            <td>I. fokú elhízás</td>
          </tr>
          <tr>
            <td>35-39,9</td>
            <td>II. fokú elhízás</td>
          </tr>
          <tr>
            <td>40 vagy több</td>
            <td>Normál</td>
          </tr>
        </table>
      </div>
      <div id='idealDiv'>
        <p>Az ideális testtömge: </p><output id='ideal'></output><br/>
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

export default App;
