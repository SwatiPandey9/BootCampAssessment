
const INITIAL_STATE = {
    isLoading: false,
    arrData: [],
    error: '',
}

const HomeScreenReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case 'IS_FETCHING':
            return{...state, isLoading: false};
        
        case 'IS_SUCCESS':
            console.log(state.arrData)
            return{...state, isLoading: false, arrData: action.payload, error: ''};

        case 'IS_FAILURE':
            return{...state, isLoading: false, error: action.payload};
         
        case 'DELETE_DATA':
            console.log(state.arrData)

            const filterarrDataList = state.arrData.filter(
                arrData => arrData.index !== action.payload,
              );
            return {...state, arrData: filterarrDataList}
        default:
            return state
    }
};

export default HomeScreenReducer;