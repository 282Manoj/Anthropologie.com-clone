import { legacy_createStore,combineReducers, applyMiddleware,  } from "redux";
import thunk from "redux-thunk";
import { reducer as clotheReducer }  from "./clotheproduct/reducer";
import{reducer as shoesReducer} from "./shoesproduct/reducer"
import { reducer as  cartReducer} from "./cart/reducer";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer=combineReducers({
clotheReducer,
shoesReducer,
cartReducer,
});
const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

// console.log(store)
export { store };
