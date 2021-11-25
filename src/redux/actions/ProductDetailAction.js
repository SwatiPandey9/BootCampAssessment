export const uploadDataAction = (data, dispatch) =>
  dispatch({type: ProductDetailActionTypes.UPLOAD_DATA, payload: data});

export const updateObjectAction = (title, id, body, dispatch) =>
  dispatch({
    type: ProductDetailActionTypes.OBJECT_UPDATE,
    payload: {title, id, body},
  });

export const ProductDetailActionTypes = {
  UPLOAD_DATA: 'UPLOAD_DATA',
  OBJECT_UPDATE: 'OBJECT_UPDATE',
};
