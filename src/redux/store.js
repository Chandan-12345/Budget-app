import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers/rootReducers";

const persistConfig = {
  key: "rootReducer",
  storage: storage,
  whitelist: ["rootReducer"], // which reducer want to store
};
const pReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(
  pReducer, // pass the persisted reducer instead of rootReducer to createStore
  enhancer // add any middlewares here
);
const persistor = persistStore(store);
export { persistor, store };
