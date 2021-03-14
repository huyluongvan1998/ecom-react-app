import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './middleware';
import rootReducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware({ thunk: false }),
  sagaMiddleware,
];

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});



sagaMiddleware.run(rootSaga);

export default  store ;
