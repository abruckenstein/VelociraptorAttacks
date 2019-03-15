import * as React from 'react'

import Routes from './Routes'
import { AppStateTypes } from '../redux/store/templates/appState'

const reactLogo = './assets/images/reactReduxTS.png'

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

const App = (props: AppTypes) => {
    return (
        <div className="App">
            <div className="App-header">
                <img
                    src={reactLogo}
                    className={`header-logo ${props.appState.spinLogo ? 'spin-logo' : ''}`}
                    onClick={props.logoClick}
                />
                <h2 className="header-text">React-Redux-TypeScript-Express template</h2>
                {props.appState.showNavigateButton &&
                    <div className="inline-button-container">
                        <button onClick={props.navigateToRedux}>redux</button>
                        <button onClick={props.navigateToObservable}>redux-observable</button>
                        <button onClick={props.navigateToRepeaterSample}>server</button>
                    </div>
                }
                {!props.appState.showNavigateButton &&
                    <div className="inline-button-container">
                        <button onClick={props.goBackToApp}>Go Back to localhost:8081</button>
                    </div>
                }
            </div>
            <Routes {...props}/>
        </div>
    )
}

export default App
