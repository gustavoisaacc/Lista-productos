import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { rootRecucer } from "./reducer/rootReducer.tsx";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composed = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootRecucer, composed);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
