import * as React from 'react'
import { Route, Switch } from 'react-router'
import { AppStateTypes } from '../redux/store/templates/appState'
import ObservableSample from './sample/ObservableSample'
import ReduxSample from './sample/ReduxSample'
import RepeaterSample from './sample/RepeaterSample'

export interface RoutesTypes {
    appState: AppStateTypes;
    goBackToApp: () => void;
    getSampleData?: () => void;
    triggerObservable: () => void;
    inputChange?: (key: string, value: string) => (event: MouseEvent) => void;
}

const Routes = (props: RoutesTypes) => {
    return (
        <div>
            <Switch>
                <Route
                    exact={true}
                    path="/redux"
                    render={() => {
                        return (
                                <ReduxSample {...props}/>
                            )
                    }}
                />
                <Route
                    exact={true}
                    path="/redux-observable"
                    render={() => {
                        return (
                            <ObservableSample
                                appState={props.appState}
                                goBackToApp={props.goBackToApp}
                                triggerObservable={props.triggerObservable}
                            />
                        )
                    }}
                />
                <Route
                    exact={true}
                    path='/server'
                    render={() => {
                        return(
                            <RepeaterSample 
                                getSampleData={props.getSampleData}     
                                sampleDataError={props.appState.sampleDataError}
                                sampleData={props.appState.sampleData} 
                                isSpinning={props.appState.isSearching}
                            />
                        )}
                    }
                />
            </Switch>
        </div>
    )
}

export default Routes