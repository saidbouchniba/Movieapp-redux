import { createStore } from "redux";
import { Moviereducer } from "./Reducer";

const store = createStore(
    Moviereducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  export default store