import initialState from './initialState';
import { SECONDS_CHANGED, MINUTES_CHANGED, HOURS_CHANGED } from '../actions/actionTypes';

export default (state = initialState, action) {
    switch(action.type) {
        case SECONDS_CHANGED:
            console.log('seconds changed');
            return { seconds: seconds, ...state };
        case MINUTES_CHANGED:
            console.log('minutes changed');
            return { minutes: minutes, ...state };
        case HOURS_CHANGED:
            console.log('hours changed');
            return { hours: hours, ...state };
        default:
            console.log('no action');
            return state;
    }
}
