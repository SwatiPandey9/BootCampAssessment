const INITIAL_STATE = {
  todoListData: [],
  title: '',
};

const TodoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      const saveData = [
        ...state.todoListData,
        {title: action.payload.title, body: action.payload.body},
      ];
      return {
        ...state,

        todoListData: saveData,
      };

    // case 'UPDATE_TITLE':
    //   return {...state, title: action.payload};

    case 'DELETE_DATA':
      console.log(action.payload);

      const deleteddata = state.todoListData.splice(action.payload, 1);
      console.log(deleteddata);

      const data = state.todoListData;
      console.log(data);
      const filterTodoList = state.todoListData.filter(
        todoListData => todoListData.index !== action.payload,
      );
      return {...state, todoListData: filterTodoList};

    case 'UPDATE_DATA':
      const obj = state.todoListData.map((item, index) => {
        if (index == action.payload.id) {
          item = {
            ...item,
            title: action.payload.title,
            body: action.payload.body,
          };
        }
        return item;
      });
      return {...state, todoListData: obj};

    default:
      return state;
  }
};

export default TodoReducer;
