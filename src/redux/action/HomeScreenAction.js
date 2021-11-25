export const getData = dispatch => {
  dispatch(getDataActionCreator());
};

const getDataActionCreator = () => {
  return middlewareFunction;
};

const middlewareFunction = (dispatch, getstate) => {
  dispatch({type: 'IS_FETCHING'});
  fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(data => {
      let userdata = data.data.sort((x, y) => {
        if (x.first_name < y.first_name) {
          return -1;
        }
        if (x.first_name > y.first_name) {
          return 1;
        }
        return 0;
      });

      let res = userdata.map(item => {
        return {...item, title: item.first_name[0].toUpperCase()};
      });

      let newRes = res.reduce((acc, value) => {
        if (!acc[value.title]) {
          acc[value.title] = [];
        }
        acc[value.title].push(value);
        return acc;
      }, {});
      // console.log(newRes)
      dispatch({type: 'IS_SUCCESS', payload: newRes});
    })
    .catch(error => {
      dispatch({type: 'IS_FAILURE', payload: error});
    });
};

