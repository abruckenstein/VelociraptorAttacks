import * as React from 'react'

import Routes from './Routes'
import { AppStateTypes } from '../redux/store/templates/appState'
import * as firebase from 'firebase';

const reactLogo = './assets/images/raptor_flipped.png'

interface AppTypes {
    appState: AppStateTypes;
    navigateToRedux: () => void;
    navigateToObservable: () => void;
    navigateToRepeaterSample: () => void;
    getSampleData: () => void; 
    goBackToApp: () => void;
    triggerObservable: () => void;
    inputChange: (key: string, value: string) => (event: MouseEvent) => void;
    logoClick: () => void;
}

var config = {
    apiKey: "AIzaSyBFxlDxENgHf9LM5oMT9bqoURy8cV7nTG8",
    authDomain: "raptorattacks-526a8.firebaseapp.com",
    databaseURL: "https://raptorattacks-526a8.firebaseio.com",
    projectId: "raptorattacks-526a8",
    storageBucket: "raptorattacks-526a8.appspot.com",
    messagingSenderId: "238522833662"
  };
  firebase.initializeApp(config);

var database = firebase.database();
let currentDaysSinceAttacks = 3;
let previousDaysSinceAttacks = [{
    endDate: new Date,
    numberOfDays: 12
},
{
    endDate: new Date,
    numberOfDays: 2
},
{
    endDate: new Date,
    numberOfDays: 7
}]

const App = (props: AppTypes) => {
    return (
        <div className="App">
            <div className="App-header">
                <img
                    src={reactLogo}
                    className={`header-logo ${props.appState.spinLogo ? 'spin-logo' : ''}`}
                    onClick={props.logoClick}
                />
                <h1 className="header-text">Days Since Last Raptor Attack :</h1>
            </div>
            <h2 className={'days-counter'}>{currentDaysSinceAttacks}</h2>
        </div>
    )
}

export default App
