import { ofType } from 'redux-observable'
import { switchMap } from 'rxjs/operators'
import { Rxios } from 'rxios'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/catch'

const rxios = new Rxios({})
import { FETCH_SAMPLE, FETCH_SAMPLE_SUCCESSFUL, FETCH_SAMPLE_FAILED } from '../../redux/actions/actionTypes'

const fetchSampleEpic = (action$, state$) =>
    action$.pipe(
        ofType(FETCH_SAMPLE),
        switchMap(() =>
            Observable.from(
                rxios.request({
                    url: `/repeater`,
                    headers: {
                        'url': 'https://jsonplaceholder.typicode.com/posts',
                    },
                }).mergeMap(response => Observable.of(
                        { type: FETCH_SAMPLE_SUCCESSFUL, sampleData: response } as any,
                    )).catch(error => Observable.of(
                    { type: FETCH_SAMPLE_FAILED } as any
                ))
            )))

export default fetchSampleEpic