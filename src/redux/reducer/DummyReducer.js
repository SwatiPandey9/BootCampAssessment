const INITIAL_STATE = {
    name: 'Radha',
}

const DummyReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default DummyReducer;