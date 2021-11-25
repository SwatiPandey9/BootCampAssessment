export const incrementCounterAction = (dispatch) => {
    return dispatch({type: CounterActionTypes.INCREMENT_COUNTER});
};

export const decrementCounterAction = (dispatch) => {
    return dispatch({type: CounterActionTypes.DECREMENT_COUNTER});
};

export const CounterActionTypes = {
    INCREMENT_COUNTER : 'INCREMENT_COUNTER',
    DECREMENT_COUNTER : 'DECREMENT_COUNTER',
};