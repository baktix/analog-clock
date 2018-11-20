import * as types from './actionTypes';

function secondsChanged(seconds) {
    return { type: types.SECONDS_CHANGED, seconds: seconds };
}

function minutesChanged(minutes) {
    return { type: types.MINUTES_CHANGED, minutes: minutes };
}

function hoursChanged(hours) {
    return { type: types.HOURS_CHANGED, hours: hours };
}
