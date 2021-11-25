import { combineReducers} from "redux";

import HomeScreenReducer from "./HomeScreenReducer";
import DummyReducer from "./DummyReducer";
import UserDetailReducer from "./UserDetailReducer";

const combinedReducers = combineReducers({
    HomeScreenData: HomeScreenReducer,
    Dummy: DummyReducer,
    UserDetail: UserDetailReducer,
})

export default combinedReducers;
