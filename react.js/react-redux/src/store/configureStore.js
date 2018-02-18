 import {createStore, applyMiddleware} from 'redux';
 import rootReducer from '../reducers';
 import reduxImmuatableStateInvarient from 'redux-immutable-state-invariant';
 export default function configureStore (initialState) {
     return createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxImmuatableStateInvarient())
     );
 }