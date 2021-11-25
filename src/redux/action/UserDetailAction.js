export const getUserData = dispatch => {
    dispatch(getUserDataActionCreator())
}

const getUserDataActionCreator = () => {
    return middlewareFunction;
}

const middlewareFunction = (dispatch) => {
    dispatch({type: 'IS_FETCHING'});
    fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(data => {
        dispatch({type: 'IS_SUCCESS', payload: data.data})
    })
    .catch(error => {
        dispatch({type: 'IS_FAILURE', payload: error});
      });
}