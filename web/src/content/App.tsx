import * as React from 'react'

import Routes from './Routes'
import { AppStateTypes } from '../redux/store/templates/appState'

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

let currentDaysSinceAttacks = 3;

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
