import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers/rootReducers";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "auth",
  // eslint-disable-next-line no-dupe-keys
  key: "accessToken",
  storage: storage,
  whitelist: ["auth"], // which reducer want to store
};
const recipeReducer = persistReducer(persistConfig, rootReducers);
const middleware = applyMiddleware(thunk, logger);
const store = createStore(recipeReducer, middleware);
const persistor = persistStore(store);
export { persistor, store };
