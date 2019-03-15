import { ofType } from 'redux-observable'
import { switchMap } from 'rxjs/operators'
import { Observable } from 'rxjs/Rx'
import { SLIDE_BOX, STOP_BOX } from '../../redux/actions/actionTypes'
import {LOCATION_CHANGE} from 'react-router-redux'

const simpleEpic = action$ =>
    action$.pipe(
        ofType(SLIDE_BOX),
        switchMap(() =>
            Observable.timer(4000)
                .takeUntil(action$.ofType(LOCATION_CHANGE))
                .mapTo({ type: STOP_BOX })
        ))


export default simpleEpic