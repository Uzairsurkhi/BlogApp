import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import blogReducer from './reducers/blogReducer';
import themeReducer from './reducers/themeReducer';

const rootReducer = combineReducers({
  blogs: blogReducer,
  theme: themeReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: composeWithDevTools(),
});

export default store;
