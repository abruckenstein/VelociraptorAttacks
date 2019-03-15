import * as React from 'react'
import {RoutesTypes} from '../Routes'
import InputGenerator, {
    SingleInputTypes,
} from '../common/InputGenerator/InputGenerator'

interface ReduxSampleTypes extends RoutesTypes {

}
const ReduxSample = (props: ReduxSampleTypes) => {
    const colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black', 'white', 'gray']


    //because the action layer will created the input data on dispatch the props will throw errors in TSLint
    const inputArray: SingleInputTypes[] = [
        {id: 'name', inputType: 'text', label: 'name', data: props.appState.inputs.name},
        {id: 'age', inputType: 'number', label: 'age', data: props.appState.inputs.age},
        {id: 'favoriteColor', inputType: 'select', label: 'favoriteColor', data: props.appState.inputs.favoriteColor, selectOptions: colorArray}
    ]

    return (
        <div>
            <InputGenerator inputArray={inputArray} onInputChange={props.inputChange}/>
        </div>
    )
}

export default ReduxSample