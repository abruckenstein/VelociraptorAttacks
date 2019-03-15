import * as React from 'react'
import * as Enzyme from 'enzyme'
import * as sinon from 'sinon'
import * as Adapter from 'enzyme-adapter-react-16'
import {shallow, mount, render} from 'enzyme'

import App from './App'
import {appState} from '../redux/store/templates/appState'

Enzyme.configure({adapter: new Adapter()})

describe('<App/>', () => {

    const navigateToRedux = sinon.spy()
    const navigateToObservable = sinon.spy()
    const navigateToRepeaterSample = sinon.spy()
    const getSampleData = sinon.spy()
    const goBackToApp = sinon.spy()
    const triggerObservable = sinon.spy()
    const logoClick = sinon.spy()
    const inputChange = sinon.spy()

    const AppAllProps = (
        <App
            appState={appState}
            navigateToRedux={navigateToRedux}
            navigateToObservable={navigateToObservable}
            navigateToRepeaterSample={navigateToRepeaterSample}
            getSampleData={getSampleData}
            goBackToApp={goBackToApp}
            triggerObservable={triggerObservable}
            logoClick={logoClick}
            inputChange={inputChange}
        />)

    let AppAllPropsShallow

    beforeEach(() => {
        AppAllPropsShallow = shallow(AppAllProps)
    })


    describe('all props', () => {
        it('should exist', () => {
            expect(AppAllPropsShallow.exists()).toEqual(true)
        })
    })

})

