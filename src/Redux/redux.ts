import {reducer} from './reducer';
import {combineReducers, createStore} from 'redux';

let preloadedState

export type AppRootStateType = ReturnType<typeof rootReducer>

//combine
const rootReducer = combineReducers({
    tack:reducer
})



//localStorage
const preloadTodoString = localStorage.getItem('app-state')
{preloadTodoString &&(preloadedState = JSON.parse(preloadTodoString))}


//create Store
export const store = createStore(rootReducer,preloadedState);


//localStorage listener
store.subscribe(()=>
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
)

// @ts-ignore
window.store = store;


