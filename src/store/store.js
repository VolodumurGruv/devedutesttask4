import { createStore } from "redux";
import articelsReducer from "./articlesReducer";
import usersReducer from "./usersReducer";
import photosReducer from "./photosReducer";

let reducers = combineReducers({
	articles: articelsReducer,
	users: usersReducer,
	photos: photosReducer,
});

const store = createStore(reducers);

export default store;
