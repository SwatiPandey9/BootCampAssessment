const INITIAL_STATE = {
  apiData: [],
  updateDataObject: {},
  title: '',
  objectUpdate: {},
};

const ProductDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPLOAD_DATA':
      return {...state, apiData: action.payload};

    case 'OBJECT_UPDATE':
      const obj = state.apiData.map(item => {
        if (item.id == action.payload.id) {
          item = {
            ...item,
            title: action.payload.title,
            body: action.payload.body,
          };
        }
        return item;
      });
      return {...state, apiData: obj};

    default:
      return state;
  }
};

export default ProductDetailsReducer;
