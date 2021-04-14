/*store文件夹*/ 
import {createStore,applyMiddleware,compose} from "redux";
import reducer from "./reducer";
// import thunk from "redux-thunk";
//构建store
const store = createStore(
    reducer,
    // applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // composeWithDevTools()
);
export default store;   