const INITIAL_STATE = {
    isLoading: false,
    userDataArray: [],
    error: '',
}

const UserDetailReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case 'IS_FETCHING':
            return{...state, isLoading: false};
        
        case 'IS_SUCCESS':
            return{...state, isLoading: false, userDataArray: action.payload, error: ''};

        case 'IS_FAILURE':
            return{...state, isLoading: false, error: action.payload};

        case 'DELETE_USER':
            //always take index in action.payload in case of filter
            const filterarrDataList = state.userDataArray.filter(
                userDataArray => userDataArray.index !== action.payload,
              );
            return {...state, userDataArray: filterarrDataList}

        case 'UPDATE_DETAILS':
          const obj = state.userDataArray.map((item, index) => {
               if (index == action.payload.id)
              item = {
                ...item,
                first_name: action.payload.firstName,
                last_name: action.payload.lastName,
                email: action.payload.email,
                username: action.payload.username
              };
            // const data = state.userDataArray.slice((0,index)  
            return item;
          });
          return {...state, userDataArray: obj};
            
        default:
            return state
    }
}

export default UserDetailReducer